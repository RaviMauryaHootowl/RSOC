import re
from utilities.error import throw_error
from storage.registers import REGISTERS
from constants.constants import *

# Gets address from a unit
# Eg. M(2000H) =>  2000
#     B   ==(here B register has value 2000)==>  2000
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

# Converts hex value to int
def hex_to_int(hex_val):
    if hex_val[-1] == 'H':
        hex_val = hex_val[:-1]
    return int(hex_val, 16)

# Returns a list of arguments from a command
def get_arguments_from_command(command):
    return remove_extra(command.split(" ",1)[-1]).split(",")

# Removes space, \t, \n from text
def remove_extra(text):
    return re.sub(REGEX_SEP_COMMAND, NOTHING, text)