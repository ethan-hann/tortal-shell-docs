# Tips and Tricks

Here are some helpful tips to get the most out of your browser shell.

## Reuse Output with Command Substitution

You can use backticks or `$()` to embed the result of a command:

```sh
echo "Today is: `date`"
COUNT=$(ls | wc -l)
echo "There are $COUNT files"
```

## Chaining and Conditional Execution

Use `&&` to run the next command only if the previous succeeded:

```sh
mkdir logs && echo "Created logs dir"
```

Use `||` to run if the previous command failed:

```sh
cat file.txt || echo "File not found"
```

Combine them:

```sh
mkdir temp && cd temp || echo "Could not enter dir"
```

## Use `read` for Interactive Scripts

Prompt for user input:

```sh
read username "What's your name?" Guest
echo "Welcome, $username"
```

## Use Functions for Reusability

```sh
say(msg) {
  echo "📢 $msg"
}

say "This is reusable"
```

## Save and Use Variables Persistently

```sh
export FAVORITE=banana
```

Now `$FAVORITE` will be available in future scripts and sessions.

## Count Lines from Files

```sh
cat items.txt | grep apple | wc -l
```

