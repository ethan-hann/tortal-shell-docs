# Command Substitution

You can substitute command output in variables or strings:

```sh
echo "Now: `date`"
CURRENT=`pwd`
```

Also supported:

```sh
FILES=$(ls | wc -ws) # count the number of files in a directory
```

All output is collapsed into a single line.
