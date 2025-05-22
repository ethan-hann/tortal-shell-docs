# Network Commands

## `curl`
**Aliases:** `get`

**Usage:** `curl|get <url> [--full] [--timeout <ms>] [--binary] [-o <file>] [--no-cors]`

**Description:** fetch URL (with/without CORS proxy)

**Options:** `--full`, `--timeout <ms>`, `--binary`, `-o <file>`, `--no-cors`

**Examples:**
- `curl https://example.com` — fetch URL
- `curl https://example.com --timeout 5000` — with timeout
- `curl https://example.com --binary` — as binary
- `curl https://example.com -o response.txt` — save to file
- `curl https://example.com --no-cors` — skip proxy
- `curl https://example.com --full` — show full body


## `download`
**Aliases:** `down`

**Usage:** `download|down [path]`

**Description:** download a file or directory from virtual FS to your computer


## `nslookup`
**Aliases:** `dig`

**Usage:** `nslookup <hostname>`

**Description:** DNS record lookup via DNS-over-HTTPS

**Examples:**
- `nslookup example.com` — Query the A, AAAA, and MX records for example.com
- `nslookup google.com` — Query the A, AAAA, and MX records for google.com


## `ping`
**Usage:** `ping [-t] [url]`

**Description:** ping a host

**Options:** `'-t'`

**Examples:**
- `ping example.com` — Ping example.com
- `ping -t example.com` — Ping example.com continuously


## `upload`
**Aliases:** `'up'`

**Description:** upload local file(s) into the shell's FS
