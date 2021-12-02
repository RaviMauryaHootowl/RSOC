from constants.constants import *
from utilities.error import throw_error

# checks if it is a valid command and skip out comment lines
def match_command(self, line):
    if line[0] == '~': return
    command_type = line.split()[0]
    if command_type in commands_list:
        self.match_pattern(line)
    else: throw_error("Invalid Syntax")

# maps the command type to the correct parser function
def match_pattern(self, line):
    command_type = line.split()[0].lower()
    getattr(self, f"parse_{command_type}")(line)