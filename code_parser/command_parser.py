from utilities.error import throw_error
from utilities.helper import get_arguments_from_command

def parse_set(self, line):
    arguments = get_arguments_from_command(line)
    # print(arguments)
    if len(arguments) != 2:
        throw_error("Invalid Syntax")
    dest_object = self.parse_unit(arguments[0])
    source_object = self.parse_unit(arguments[1])
    self.execute_set(dest_object, source_object)


def parse_add(self, line):
    arguments = get_arguments_from_command(line)
    if len(arguments) != 2:
        throw_error("Invalid Syntax")
    operand_1 = self.parse_unit(arguments[0])
    operand_2 = self.parse_unit(arguments[1])
    self.execute_add(operand_1, operand_2)

def parse_sub(self, line):
    arguments = get_arguments_from_command(line)
    if len(arguments) != 2:
        throw_error("Invalid Syntax")
    operand_1 = self.parse_unit(arguments[0])
    operand_2 = self.parse_unit(arguments[1])
    self.execute_sub(operand_1, operand_2)

def parse_mul(self, line):
    arguments = get_arguments_from_command(line)
    if len(arguments) != 2:
        throw_error("Invalid Syntax")
    operand_1 = self.parse_unit(arguments[0])
    operand_2 = self.parse_unit(arguments[1])
    self.execute_mul(operand_1, operand_2)

def parse_div(self, line):
    arguments = get_arguments_from_command(line)
    if len(arguments) != 2:
        throw_error("Invalid Syntax")
    operand_1 = self.parse_unit(arguments[0])
    operand_2 = self.parse_unit(arguments[1])
    self.execute_div(operand_1, operand_2)

def parse_show(self, line):
    arguments = get_arguments_from_command(line)
    # print(arguments)
    source_object = self.parse_unit(arguments[0])
    self.execute_show(source_object)

def parse_inr(self, line):
    arguments = get_arguments_from_command(line)
    if len(arguments) != 1:
        throw_error("Invalid Syntax")
    operand = self.parse_unit(arguments[0])
    self.execute_inr(operand)

def parse_dcr(self, line):
    arguments = get_arguments_from_command(line)
    if len(arguments) != 1:
        throw_error("Invalid Syntax")
    operand = self.parse_unit(arguments[0])
    self.execute_dcr(operand)

def parse_ifg(self, line):
    arguments = get_arguments_from_command(line)
    if len(arguments) != 3:
        throw_error("Invalid Syntax")
    first_object = self.parse_unit(arguments[0])
    second_object = self.parse_unit(arguments[1])
    jump_tag = arguments[2]
    self.execute_ifg(first_object, second_object, jump_tag)

def parse_ifl(self, line):
    arguments = get_arguments_from_command(line)
    if len(arguments) != 3:
        throw_error("Invalid Syntax")
    first_object = self.parse_unit(arguments[0])
    second_object = self.parse_unit(arguments[1])
    jump_tag = arguments[2]
    self.execute_ifl(first_object, second_object, jump_tag)

def parse_ife(self, line):
    arguments = get_arguments_from_command(line)
    if len(arguments) != 3:
        throw_error("Invalid Syntax")
    first_object = self.parse_unit(arguments[0])
    second_object = self.parse_unit(arguments[1])
    jump_tag = arguments[2]
    self.execute_ife(first_object, second_object, jump_tag)

def parse_ifn(self, line):
    arguments = get_arguments_from_command(line)
    if len(arguments) != 3:
        throw_error("Invalid Syntax")
    first_object = self.parse_unit(arguments[0])
    second_object = self.parse_unit(arguments[1])
    jump_tag = arguments[2]
    self.execute_ifn(first_object, second_object, jump_tag)

def parse_jump(self, line):
    arguments = get_arguments_from_command(line)
    if len(arguments) != 1:
        throw_error("Invalid Syntax")
    jump_tag = arguments[1]
    self.execute_jump(jump_tag)