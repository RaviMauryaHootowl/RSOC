from constants.constants import UNIT_TYPE
from utilities.error import throw_error

# Parses a unit argument of data (data, memory, register)
def parse_unit(self, unit):
    unit_obj = {"unit": unit}
    if unit[0] == 'M':
        unit_obj["unit_type"] = UNIT_TYPE.MEM
    elif unit[-1] == 'H' or unit[0].isnumeric():
        unit_obj["unit_type"] = UNIT_TYPE.DATA
    elif len(unit) == 1:
        unit_obj["unit_type"] = UNIT_TYPE.REG
    elif unit[:2] == 'X(' and unit[-1] == ')':
        unit_obj["unit_type"] = UNIT_TYPE.PTR
    else:
        throw_error(f"Line:{self.line_num}, Invalid Syntax")
    return unit_obj


# To be added
'''
SET B, 10        set B register as 10
SET X(B), 20     set value of location stored at B to be 20

INR B            increment the value of B register
INR X(B)         increment the value of mem loc stored at B register
'''