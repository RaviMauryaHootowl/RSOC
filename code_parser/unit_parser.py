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
    else:
        throw_error("Syntax Error")
    return unit_obj