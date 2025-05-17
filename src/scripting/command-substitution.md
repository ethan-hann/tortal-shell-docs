# Command Substitution

You can substitute command output in variables or strings:

```sh
echo "Now: `date`"
CURRENT=`pwd`
```

Also supported:

```sh
FILES=$(ls | wc -l)
```

All output is collapsed into a single line.
