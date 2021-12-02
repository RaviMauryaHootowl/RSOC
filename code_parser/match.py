from constants.constants import *
from utilities.error import throw_error

# take input from file
def match_command(self, line):
    if line[0] == '~': return         # Skip comment lines
    command_type = line.split()[0]
    if command_type in commands_list:
        self.match_pattern(line)
    else: throw_error("Invalid Syntax")


def match_pattern(self, line):
    command_type = line.split()[0].lower()
    getattr(self, f"parse_{command_type}")(line)