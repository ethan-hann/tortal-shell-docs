// scripts/generate-sidebar.ts
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

type SidebarItem = {
  text: string
  link?: string
  items?: SidebarItem[]
  collapsed?: boolean
}
type SidebarConfig = Record<string, SidebarItem[]>

// Resolve __dirname in ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Paths
const projectRoot = path.resolve(__dirname, '..')
const docsDir = path.join(projectRoot, 'src')
const outputPath = path.join(projectRoot, '.vitepress', 'sidebar.json')

// Capitalize and prettify names
function prettify(name: string) {
  return name.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
}

// Build sidebar items for a section (guide, reference, etc.)
function buildSectionItems(sectionDir: string, routeBase: string): SidebarItem[] {
  const items: SidebarItem[] = []

  // Include section index.md as first item if exists
  const indexMd = path.join(sectionDir, 'index.md')
  if (fs.existsSync(indexMd)) {
    items.push({
      text: prettify(path.basename(sectionDir)),
      link: routeBase
    })
  }

  // Read and sort entries
  const entries = fs.readdirSync(sectionDir, { withFileTypes: true })
    .filter(e => !e.name.startsWith('.') && e.name !== 'index.md' && e.name !== 'README.md')
    .sort((a, b) => a.name.localeCompare(b.name))

  for (const entry of entries) {
    const fullPath = path.join(sectionDir, entry.name)
    if (entry.isDirectory()) {
      // Nested group
      const dirRoute = `${routeBase}${entry.name}/`
      const childEntries: SidebarItem[] = []
      for (const child of fs.readdirSync(fullPath, { withFileTypes: true })) {
        if (child.isFile() && child.name.endsWith('.md')) {
          const childName = child.name.replace(/\.md$/, '')
          childEntries.push({
            text: prettify(childName),
            link: `${dirRoute}${childName}`
          })
        }
      }
      if (childEntries.length) {
        items.push({
          text: prettify(entry.name),
          collapsed: false,
          items: childEntries
        })
      }
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      // Individual page
      const name = entry.name.replace(/\.md$/, '')
      items.push({
        text: prettify(name),
        link: `${routeBase}${name}`
      })
    }
  }

  return items
}

// Generate sidebar configuration with one section per top-level folder
function generateSidebarConfig(): SidebarConfig {
  const config: SidebarConfig = {}
  const sections = fs.readdirSync(docsDir, { withFileTypes: true })
    .filter(e => e.isDirectory() && !e.name.startsWith('.'))
    .sort((a, b) => a.name.localeCompare(b.name))

  for (const sec of sections) {
    const secName = sec.name
    const secDir = path.join(docsDir, secName)
    const route = `/${secName}/`
    const items = buildSectionItems(secDir, route)
    if (items.length) {
      config[route] = [
        {
          text: prettify(secName),
          collapsed: false,
          items
        }
      ]
    }
  }

  return config
}

// Run and write JSON
console.log(`Scanning docs directory: ${docsDir}`)
const sidebarConfig = generateSidebarConfig()
fs.mkdirSync(path.dirname(outputPath), { recursive: true })
fs.writeFileSync(outputPath, JSON.stringify(sidebarConfig, null, 2))
console.log(`Sidebar JSON generated at ${outputPath}`)

// For testing, add this line to the run docs:dev script in package.json:
//tsx scripts/generate-sidebar.ts && 