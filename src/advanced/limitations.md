# Limitations

While the shell is feature-rich, there are some limitations due to its browser-based nature.

## ❌ No True Concurrency

Scripts execute commands sequentially. There is no support for parallel execution.

## ❌ No External Binary Execution

All commands are JavaScript-powered and built into the shell. You can't run system binaries or native code.

## 🗂 Files Are Not System Files

The file system is virtual and sandboxed in the browser. You cannot access real local files unless uploaded.

## 🔐 No Networking from Scripts

Commands like `ping`, `curl`, and `nslookup` are allowed, but direct use of `fetch` or `XMLHttpRequest` is not permitted in scripts.

## 🛠 Limited Bash Syntax

This is not Bash. There is:

- No `[[ ]]` or `[[ -z ... ]]`
- No `case`, `select`, `while`
- No heredocs (`<<EOF`)

## ✅ Supported

- `if/else/fi` (command-based conditions)
- `for/in/do/done`
- `functions(args) {}`
- `exit`, `return`
- `$()` / backtick substitutions
- Pipes, logical chaining (`&&`, `||`)
- Scripts can access `$1`, `$2`, etc.