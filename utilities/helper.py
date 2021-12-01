import re
from utilities.error import throw_error
from storage.registers import REGISTERS
from constants.constants import *

def get_address(add_src):
    address = ""
    if add_src[0:2] != 'M(' or add_src[-1] != ')':
        throw_error("Invalid Syntax")
    add_src_trimed = add_src[2:-1]
    if add_src[-2] == 'H':
        address = add_src_trimed[:-1]  #remove H
    elif add_src_trimed in REGISTERS:     #if register 
        address = REGISTERS[add_src_trimed]
    else:
        throw_error("Invalid Syntax")
    return address

def hex_to_int(hex_val):
    return int(hex_val, 16)

def get_arguments_from_command(command):
    return remove_extra(command.split(" ",1)[-1]).split(",")
    # return re.sub(REGEX_SEP_COMMAND, NOTHING, command.split(" ", 1)[-1]).split(",")

def remove_extra(text):
    return re.sub(REGEX_SEP_COMMAND, NOTHING, text)