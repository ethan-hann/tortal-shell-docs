# Functions

Functions are defined with parentheses and braces:

```sh
greet(name) {
  echo "Hello, $name!"
}
```

They support named parameters or you can use `$1`, `$2`, etc.:

```sh
add(a, b) {
  calc "$a + $b"
}
```

Call them like this:

```sh
greet Alice
RESULT=`add 10 20`
echo "Sum is $RESULT"
```

Use `return` to exit the function and `exit` to quit the script entirely.
