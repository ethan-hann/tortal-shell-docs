# File System Commands

## `cat`
**Usage:** `cat [file]`

**Description:** print file contents or piped input

**Examples:**
- `cat file.txt` — Prints the contents of file.txt
- `echo 'Hello, World!' | cat` — Prints 'Hello, World!'
- `cat` — Prints whatever is piped into it
- `cat file.txt | grep 'Hello'` — Prints lines containing 'Hello' from file.txt
- `cat file.txt | wc -l` — Counts the number of lines in file.txt


## `cd`
**Aliases:** `'chdir'`

**Usage:** `cd [dir]`

**Description:** change directory


## `cp`
**Aliases:** `'copy'`

**Usage:** `cp [src] [dst]`

**Description:** copy file


## `edit`
**Aliases:** `nano`, `vim`, `vi`

**Usage:** `edit|nano|vim|vi [file]`

**Description:** open a Monaco editor with syntax highlighting


## `ls`
**Aliases:** `list`

**Usage:** `ls [path] [-l|--long]`

**Description:** list a directory's contents (long format)

**Options:** `-l`, `--long`


## `mkdir`
**Usage:** `mkdir [dir]`

**Description:** make a directory


## `pwd`
**Aliases:** `'whereami'`

**Usage:** `pwd`

**Description:** display working directory


## `rm`
**Aliases:** `rmdir`

**Usage:** `rm [file|dir]`

**Description:** remove file or directory


## `touch`
**Aliases:** `'create'`

**Usage:** `touch [file]`

**Description:** create empty file or update mtime


## `tree`
**Usage:** `tree [dir]`

**Description:** show directory tree


## `write`
**Aliases:** `wr`

**Usage:** `write [file] [text]`

**Description:** overwrite file with text or piped input

**Examples:**
- `write file.txt 'Hello, World!'` — Writes 'Hello, World!' to file.txt
- `echo 'Hello, World!' | write file.txt` — Writes 'Hello, World!' to file.txt


