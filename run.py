from constants.constants import MAX_OUTPUT_LIMIT
from flask import Flask, request
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin
from utilities.helper import remove_extra

app = Flask(__name__, static_folder='client/build', static_url_path='')
CORS(app)

class Engine:
    line_num = 1
    code = []
    tag_lines = {}
    output = ""
    output_lines = 0
    from storage.memory import MEMORY
    from storage.registers import REGISTERS
    def __init__(self, file):
        self.tag_lines.clear()
        self.REGISTERS = self.REGISTERS.fromkeys(self.REGISTERS, 0)
        self.code = file.split('\n')
        for index, line in enumerate(self.code):
            if ':' in line and line[0] != '~':
                self.tag_lines[remove_extra(line.split(':')[-1])] = index+1
                self.code[index] = line.split(':')[0]
        
    def run(self):
        self.output = ""
        while self.line_num <= len(self.code):
            if self.output_lines > MAX_OUTPUT_LIMIT:
                self.output += '...\n'
                return
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

@app.route('/api/run', methods=['POST'])
@cross_origin()
def run():
    try:
        code = request.get_json()['code']
        engine = Engine(code)
        engine.run()
        output = engine.output
        del engine
        return {"status": "done", "output": output}
    except Exception as e:
        return {"status": "error", "message": str(e)}

@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run()
