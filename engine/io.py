from utilities.helper import *

def get_data_from(self, source):
    data = 0
    if source["unit_type"] == UNIT_TYPE.DATA:
        data = int(source["unit"])   # need to consider Hex values in future
    elif source["unit_type"] == UNIT_TYPE.REG:
        data = self.REGISTERS[source["unit"]]
    else: #MEM
        data = self.MEMORY[hex_to_int(get_address(source["unit"]))]
    return data

def set_data_to(self, dest, data):
    if dest["unit_type"] == UNIT_TYPE.REG:
        self.REGISTERS[dest["unit"]] = data
    elif dest["unit_type"] == UNIT_TYPE.MEM:
        self.MEMORY[hex_to_int(get_address(dest["unit"]))] = data
    else:
        throw_error("Invalid Syntax")