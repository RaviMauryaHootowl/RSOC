from utilities.helper import remove_extra

class Engine:
    line_num = 1
    code = []
    tag_lines = {}
    from storage.memory import MEMORY
    from storage.registers import REGISTERS
    def __init__(self, filename):
        with open(filename, "r") as file:
            self.code = file.readlines()
        for index, line in enumerate(self.code):
            if ':' in line and line[0] != '~':
                self.tag_lines[remove_extra(line.split(':')[-1])] = index+1
                self.code[index] = line.split(':')[0]
        
    def run(self):
        while self.line_num <= len(self.code):
            self.match_command(self.code[self.line_num-1])
            self.line_num += 1

    from code_parser.match import match_command, match_pattern
    from code_parser.unit_parser import parse_unit
    from code_parser.command_parser import parse_set, parse_add, \
        parse_mul, parse_div, parse_sub, parse_show, parse_inr, parse_dcr, \
        parse_ifg, parse_ifl, parse_ife, parse_ifn, parse_jump, parse_skip
    from engine.execute import execute_set, execute_add, execute_sub, \
        execute_mul, execute_div, execute_show, execute_inr, execute_dcr, \
        execute_ifg, execute_ifl, execute_ife, execute_ifn, execute_jump, execute_skip

    from engine.io import set_data_to, get_data_from

if __name__ == '__main__':
    engine = Engine("code.txt")
    engine.run()
