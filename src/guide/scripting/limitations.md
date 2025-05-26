## 🪨 Known Spellbound Limitations

Even the most powerful tomes have their bounds. While the Tortal Shell is a spell-slinger’s delight, there are a few enchantments it just can’t conjure—yet.

### 💤 No True Concurrency

Scripts follow the path of a well-behaved wizard apprentice: one task at a time.

* No backgrounding (`&`)
* No `async` sorcery
* No parallel spell threads

🕰 All magic happens in order, like a good queue at the potions shop. Pace your scrolls accordingly.

### 🧱 No Native Binaries (Muggles Only)

This is a browser, not a dungeon terminal. You cannot summon native binaries or system familiars.

```sh
# ❌ These shall not pass
make
python3 summon.py
```

All spells (commands) must be part of the shell’s sacred scrolls — handcrafted in TypeScript, with care and possibly coffee.

### 📦 Files are Virtual, Not Arcane Artifacts

You have a whole file system—hidden in browser space. But it's sandboxed tighter than a dragon egg vault.

* You can’t touch your actual hard drive 🧱
* Uploaded files are temporarily borrowed via browser sorcery
* Everything lives in a magical storage dimension (a.k.a. localStorage or IndexedDB)

### 🌐 Network Access: Controlled Portals Only

You get `ping`, `curl`, and `nslookup` — the officially sanctioned teleportation gates.

* ❌ No raw `fetch()`
* ❌ No `XMLHttpRequest`
* ❌ No socket spells or AJAX alchemy

📡 The browser’s magical firewall says: "*That’s enough internet for you.*"

### 🧙‍♂️ Bash-Like, Not Bash-Certified

The shell speaks fluent Bash-ish, but isn’t a full-blown Bash mage.

Unsupported incantations:
* ❌ No `[[ ... ]]` double-bracket tests
* ❌ No heredocs (`<<EOF`)
* ❌ No `select`, `until`

But fear not, for these spells are supported:
* ✅ `if`, `else`, `elif`, `fi`
* ✅ `for`, `while`, `case`, `done`
* ✅ Function charms: `greet(name) { ... }`
* ✅ `break`, `continue`, `return`, `exit`
* ✅ All the arithmetic you need: `+ - * / % ++ -- += -=`
* ✅ Command substitution: `whoami` or `$(date)`
* ✅ Pipes (`|`), logic chains (`&&`,`||`)
* ✅ Positional potions: `$1`, `$2`, etc.

In short: You get about 80% of a full Bash wizard’s staff, without the risk of summoning system demons.

🧞‍♂️ Use wisely, and enchant often.