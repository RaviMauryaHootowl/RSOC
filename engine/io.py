from utilities.helper import *
from utilities.helper import hex_to_int


## Lowest Level function to get data from source
def get_data_from(self, source):
    data = 0
    if source["unit_type"] == UNIT_TYPE.DATA:
        if source["unit"][-1] == 'H': source["unit"] = hex_to_int(source["unit"])
        data = int(source["unit"])
    elif source["unit_type"] == UNIT_TYPE.REG:
        data = self.REGISTERS[source["unit"]]
    elif source["unit_type"] == UNIT_TYPE.PTR:
        data = self.MEMORY[self.get_data_from(self.parse_unit(source["unit"][-2]))]
    else: 
        data = self.MEMORY[hex_to_int(get_address(source["unit"]))]
    return data

## Lowest Level function to set data into destination
def set_data_to(self, dest, data):
    if dest["unit_type"] == UNIT_TYPE.REG:
        self.REGISTERS[dest["unit"]] = data
    elif dest["unit_type"] == UNIT_TYPE.PTR:
        self.MEMORY[self.get_data_from(self.parse_unit(dest["unit"][-2]))] = data
    elif dest["unit_type"] == UNIT_TYPE.MEM:
        self.MEMORY[hex_to_int(get_address(dest["unit"]))] = data
    else:
        throw_error(f"Line:{self.line_num}, Invalid Syntax")