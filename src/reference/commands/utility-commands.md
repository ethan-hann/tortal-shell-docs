# Utility Commands

## `calc`
**Aliases:** `'calculate'`, `'math'`

**Usage:** `calc [expression] or calc (for interactive mode)`

**Description:** calculate a mathematical expression

**Examples:**
- `calc 2 + 2` — adds two numbers
- `calc` — enter interactive calculation mode
- `calc sqrt(2)` — get the square root of 2
- `calc x * 2` — use a variable
- `calc 2^3` — raise 2 to the power of 3
- `calc 2 * pi` — use a constant
- `calc 2 m + 3 cm` — use units


## `clear`
**Aliases:** `cls`

**Usage:** `clear | cls`

**Description:** clear the screen


## `date`
**Aliases:** `'time'`

**Usage:** `date`

**Description:** show current date & time

**Options:** `'--utc'`, `'--local'`, `'-t'`, `'-d'`

**Examples:**
- `date` — Show current date and time
- `date -t` — Show current time only
- `date -d` — Show current date only
- `date --local` — Show current date and time in local timezone
- `date --utc` — Show current date and time in UTC
- `date --local` — Show current date and time in local timezone


## `echo`
**Usage:** `echo [-n] [text...] [>> file]`

**Description:** repeat text, append to a file, or passthrough piped input

**Options:** `'-n'`

**Examples:**
- `echo 'Hello, World!'` — Prints 'Hello, World!'
- `echo 'Hello, World!' >> file.txt` — Appends 'Hello, World!' to file.txt
- `echo 'Hello, World!' | echo` — Prints 'Hello, World!'
- `echo -n 'Hello, World!'` — Prints 'Hello, World!' with a newline


## `export`
**Usage:** `export [KEY[=VALUE]]`

**Description:** view or set persistent environment variables

**Options:** `'-c'`

**Examples:**
- `export` — list all environment variables
- `export KEY=VALUE` — set KEY to VALUE
- `export KEY=` — unset KEY
- `export KEY` — print KEY's value
- `export -c` — clear all environment variables


## `help`
**Usage:** `help [command]`

**Description:** show this help text


## `history`
**Usage:** `history`

**Description:** show command history


## `read`
**Usage:** `read <varName> [prompt]`

**Description:** prompt user for input and store in variable

**Examples:**
- `read myVar` — Prompt for input and store in myVar
- `read myVar 'Enter your name: '` — Prompt for name


## `theme`
**Usage:** `theme [light|dark]`

**Description:** switch light/dark theme


## `wait`
**Usage:** `wait <milliseconds>`

**Description:** pause execution for specified milliseconds

**Examples:**
- `wait 1000` — Wait for 1 second
- `wait 5000` — Wait for 5 seconds


## `wc`
**Aliases:** `'stats'`, `'count'`

**Usage:** `wc [-l] [-w] [-b] [file]`

**Description:** count lines, words, and bytes in file or stdin

**Options:** `-l`, `-w`, `-b`

**Examples:**
- `wc -l file.txt` — Counts lines in file.txt
- `wc -w file.txt` — Counts words in file.txt
- `wc -b file.txt` — Counts bytes in file.txt
- `echo 'Hello World' | wc -w` — Counts words in piped input
- `echo 'Hello World' | wc` — Counts lines, words, and bytes in piped input
- `wc` — Counts lines, words, and bytes in stdin
- `wc file.txt` — Counts lines, words, and bytes in file.txt
- `run script.sh | wc` — Counts lines, words, and bytes in script output


