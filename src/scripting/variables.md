# Variables

## Assigning Values

Use `=` with no spaces:

```sh
X=100
Y=$X
```

Variables are dynamically typed and do not require `let`, `var`, or `$` on assignment.

## Expanding Variables

```sh
echo "X is $X, Y is $Y"
```

Supports both `$VAR` and `${VAR}`.

## Script Arguments

Arguments are passed like this:

```sh
run script.sh one two
```

They are accessed as:

```sh
$1   # → one
$2   # → two
```
