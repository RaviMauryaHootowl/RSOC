from constants.constants import *
from utilities.error import throw_error

# take input from file
def match_command(self, line):
    # print(line)
    command_type = line.split()[0]
    if command_type in commands_list:
        self.match_pattern(line)
    else: throw_error("Invalid Syntax")


def match_pattern(self, line):
    # print(line)
    command_type = line.split()[0]
    if command_type == "SET":
        self.parse_set(line)
    elif command_type == "SHOW":
        self.parse_show(line)
    elif command_type == "ADD":
        self.parse_add(line)
    elif command_type == "SUB":
        self.parse_sub(line)
    elif command_type == "MUL":
        self.parse_mul(line)
    elif command_type == "DIV":
        self.parse_div(line)
    elif command_type == "INR":
        self.parse_inr(line)
    elif command_type == "DCR":
        self.parse_dcr(line)
    elif command_type == "IFG":
        self.parse_ifg(line)
    elif command_type == "IFL":
        self.parse_ifl(line)
    elif command_type == "IFE":
        self.parse_ife(line)
    elif command_type == "IFN":
        self.parse_ifn(line)
    elif command_type == "JUMP":
        self.parse_jump(line)