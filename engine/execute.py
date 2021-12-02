from engine.io import set_data_to
from constants.constants import REG_A

## Execute functions to perform an action based on command type

def execute_set(self, dest, source):
    data_to_set = self.get_data_from(source)
    self.set_data_to(dest, data_to_set)

def execute_add(self, operand_1, operand_2):
    operand_1_val = self.get_data_from(operand_1)
    operand_2_val = self.get_data_from(operand_2)
    self.set_data_to(REG_A, operand_1_val + operand_2_val)

def execute_sub(self, operand_1, operand_2):
    operand_1_val = self.get_data_from(operand_1)
    operand_2_val = self.get_data_from(operand_2)
    self.set_data_to(REG_A, operand_1_val - operand_2_val)

def execute_mul(self, operand_1, operand_2):
    operand_1_val = self.get_data_from(operand_1)
    operand_2_val = self.get_data_from(operand_2)
    self.set_data_to(REG_A, operand_1_val * operand_2_val)

def execute_div(self, operand_1, operand_2):
    operand_1_val = self.get_data_from(operand_1)
    operand_2_val = self.get_data_from(operand_2)
    self.set_data_to(REG_A, operand_1_val // operand_2_val)

def execute_show(self, source):
    data_from_source = self.get_data_from(source)
    print(data_from_source)

def execute_inr(self, operand):
    operand_val = self.get_data_from(operand)
    set_data_to(operand, operand_val+1)

def execute_dcr(self, operand):
    operand_val = self.get_data_from(operand)
    set_data_to(operand, operand_val-1)

def execute_ifg(self, operand_1, operand_2, jump_tag):
    operand_1_val = self.get_data_from(operand_1)
    operand_2_val = self.get_data_from(operand_2)
    if operand_1_val > operand_2_val:
        self.line_num = self.tag_lines[jump_tag] - 1   # -1 because it will increase one again

def execute_ifl(self, operand_1, operand_2, jump_tag):
    operand_1_val = self.get_data_from(operand_1)
    operand_2_val = self.get_data_from(operand_2)
    if operand_1_val < operand_2_val:
        self.line_num = self.tag_lines[jump_tag] - 1

def execute_ife(self, operand_1, operand_2, jump_tag):
    operand_1_val = self.get_data_from(operand_1)
    operand_2_val = self.get_data_from(operand_2)
    if operand_1_val == operand_2_val:
        self.line_num = self.tag_lines[jump_tag] - 1

def execute_ifn(self, operand_1, operand_2, jump_tag):
    operand_1_val = self.get_data_from(operand_1)
    operand_2_val = self.get_data_from(operand_2)
    if operand_1_val != operand_2_val:
        self.line_num = self.tag_lines[jump_tag] - 1

def execute_jump(self, jump_tag):
    self.line_num = self.tag_lines[jump_tag] - 1

def execute_skip(self):
    pass