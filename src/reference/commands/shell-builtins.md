# Shell Built-in Commands

These commands control shell logic, environment, and scripting behavior.

## `about`
**Usage:** `about`

**Description:** show information about the shell


## `clearstorage`
**Aliases:** `cstor`

**Usage:** `clearstorage|cstor`

**Description:** clear persistent storage (except cookies)


## `contact`
**Usage:** `contact`

**Description:** scroll to contact form


## `cookies`
**Aliases:** `'consent'`, `'yum'`

**Usage:** `cookies [(a)ccept|(d)ecline|(c)lear]`

**Description:** manage cookie consent


## `df`
**Aliases:** `storage`

**Usage:** `df|storage`

**Description:** show in-shell fs usage + storage quota

**Options:** `'--short'`, `'-s'`


## `grep`
**Aliases:** `search`

**Usage:** `grep|search <pattern> [file]`

**Description:** search for pattern in file or stdin

**Examples:**
- `grep 'pattern' file.txt` — Search for 'pattern' in file.txt
- `echo 'Hello World' | grep 'World'` — Search for 'World' in piped input
- `cat file.txt | grep 'pattern'` — Search for 'pattern' in file.txt


## `head`
**Usage:** `head [-n lines] [file]`

**Description:** show first lines of a file

**Options:** `-n lines`


## `json`
**Usage:** `json [file]`

**Description:** pretty-print and validate JSON file

**Examples:**
- `json file.json` — Pretty-print and validate file.json
- `echo '{\"key\": \"value\"}' | json` — Pretty-print and validate piped JSON


## `move`
**Aliases:** `'mv'`, `'rename'`

**Usage:** `move [src] [dst]`

**Description:** move/rename file or directory


## `open`
**Aliases:** `o`

**Usage:** `open|o [url]`

**Description:** open a webpage


## `preview`
**Aliases:** `md`

**Usage:** `preview|md [file] [--render]`

**Description:** preview files in an overlay

**Options:** `'--render'`, `'-r'`


## `privacy`
**Aliases:** `priv`

**Usage:** `privacy|priv`

**Description:** open the privacy policy


## `projects`
**Aliases:** `'proj'`

**Usage:** `projects [options] [projectName]`

**Description:** list/open my projects

**Options:** `'--list'`, `'--open'`, `'-l'`, `'-o'`

**Examples:**
- `projects` — List all projects
- `projects --list` — List all projects
- `projects --open projectName` — Open the specified project in a new tab
- `projects -l` — Short for --list
- `projects -o projectName` — Short for --open projectName


## `random`
**Aliases:** `'rand'`

**Usage:** `random [min] [max]`

**Description:** (psudo) random integer between min and max (default 0-100)

**Examples:**
- `rand` — Random integer between 0 and 100
- `rand 1 10` — Random integer between 1 and 10
- `rand 5 15` — Random integer between 5 and 15
- `rand -10 10` — Random integer between -10 and 10
- `rand 1000 2000` — Random integer between 1000 and 2000


## `resume`
**Usage:** `resume`

**Description:** view resume


## `run`
**Aliases:** `source`

**Usage:** `run <script-path> [args...]`

**Description:** execute commands from a script file with optional args

**Examples:**
- `run script.sh` — Execute the script file
- `run myscript` — Execute the script file
- `run /path/to/script.sh` — Execute the script file
- `run script.sh | grep 'pattern'` — Filter script output with grep
- `echo 'Hello' | run script.sh` — Pipe input to the script
- `run script.sh | wc -l` — Count lines in the script output
- `run script.sh arg1 arg2` — Pass arguments to the script
- `run script.sh arg1 arg2 | grep 'pattern'` — Filter script output with grep
- `echo 'Hello' | run script.sh arg1 arg2` — Pipe input to the script
- `run script.sh arg1 arg2 | wc -l` — Count lines in the script output


## `sort`
**Usage:** `sort [-a | -d] [file]`

**Description:** sort lines of a file or stdin

**Options:** `-a`, `-d`

**Examples:**
- `sort -a file.txt` — Sort lines in ascending order from file.txt
- `sort -d file.txt` — Sort lines in descending order from file.txt
- `echo -n 'banana\\napple\\ncherry' | sort -a` — Sort lines in ascending order from piped input
- `echo -n 'banana\\napple\\ncherry' | sort -d` — Sort lines in descending order from piped input


## `tail`
**Usage:** `tail [-n lines] [file]`

**Description:** show last lines of a file or stdin

**Options:** `-n lines`

**Examples:**
- `tail -n 5 file.txt` — Show last 5 lines of file.txt
- `echo 'Hello World' | tail -n 1` — Show last line of piped input
- `tail` — Show last 10 lines of stdin
- `tail file.txt` — Show last 10 lines of file.txt
- `run script.sh | tail` — Show last 10 lines of script output


## `template`
**Aliases:** `demo`

**Usage:** `template|demo [dir]`

**Description:** create demo project template files, optionally in a new directory


## `terms`
**Aliases:** `tos`

**Usage:** `terms|tos`

**Description:** open the terms of service


## `test`
**Aliases:** `[`

**Usage:** `test [-e|-f|-d <path>] | [ <lhs> (=|==|===|!=|!==| -eq|-ne|-gt|-lt|-ge|-le|>|<|>=|<=) <rhs> ] ]`

**Description:** evaluate file, string, or numeric conditions

**Options:** `-e`, `-f`, `-d`


## `tortal`
**Usage:** `tortal`

**Description:** what does 'Tortal' mean?


## `uniq`
**Usage:** `uniq [file]`

**Description:** output only the first of each repeated line (global)

**Examples:**
- `uniq file.txt` — Print unique lines from file.txt
- `cat file.txt | uniq` — Print unique lines from piped input


## `uptime`
**Usage:** `uptime`

**Description:** show the uptime of the shell


## `way`
**Aliases:** `whoareyou`

**Usage:** `way | whoareyou`

**Description:** scroll to the about-me section on the home page


## `whoami`
**Aliases:** `who`

**Usage:** `whoami | who`

**Description:** print who the current user is


## `xargs`
**Usage:** `xargs <cmd> [initial args...]`

**Description:** build and run commands from stdin tokens

**Examples:**
- `echo 'a b c' | xargs echo` — Prints 'a b c'
- `echo 'a b c' | xargs echo hello` — Prints 'hello a b c'
- `echo 'a b c' | xargs -n 1 echo` — Prints 'a', 'b', and 'c' on separate lines
