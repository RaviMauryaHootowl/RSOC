from enum import Enum
commands_list = ["SET", "ADD", "SUB", "MUL", "DIV", "INR", "DCR", "SHOW",
                "IFG", "IFL", "IFE", "IFN", "JUMP", "SKIP"]

REGEX_SEP_COMMAND = r'[\n \t\r]'
NOTHING = ''


class UNIT_TYPE(Enum):
    DATA = 1
    MEM = 2
    REG = 3

REG_A = {"unit_type" : UNIT_TYPE.REG, "unit": "A"}

MAX_OUTPUT_LIMIT = 10000