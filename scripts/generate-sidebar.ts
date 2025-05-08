import fs from 'fs'
import path from 'path'

type SidebarEntry =
  | { text: string; link: string }
  | { text: string; collapsed: boolean; items: SidebarEntry[] }

function generateSidebar(dir: string, baseDir: string = dir): SidebarEntry[] {
  const result: SidebarEntry[] = []

  for (const file of fs.readdirSync(dir, { withFileTypes: true })) {
    // Skip hidden files
    if (file.name.startsWith('.')) continue

    const absolutePath = path.join(dir, file.name)
    const relativePath = path.relative(baseDir, absolutePath)
    const routePath = relativePath.replace(/\\/g, '/').replace(/\.md$/, '')

    if (file.isDirectory()) {
      // Process directory
      const children = generateSidebar(absolutePath, baseDir)
      if (children.length === 0) continue

      result.push({
        text: file.name.charAt(0).toUpperCase() + file.name.slice(1).replace(/[-_]/g, ' '),
        collapsed: false,
        items: children
      })
    } else if (file.name.endsWith('.md')) {
      // Process markdown file
      const name = file.name.replace(/\.md$/, '')

      // Special handling for index/README files
      let link = ''
      if (name === 'index' || name === 'README') {
        // For root index, use '/'
        if (dir === baseDir) {
          link = '/'
        } else {
          // For nested index, point to the directory
          link = '/' + path.dirname(routePath)
        }
      } else {
        link = '/' + routePath
      }

      result.push({
        text: name === 'index' || name === 'README'
          ? 'Introduction'
          : name.charAt(0).toUpperCase() + name.slice(1).replace(/[-_]/g, ' '),
        link: link
      })
    }
  }

  return result
}

// Fix: Use absolute paths by resolving from script location
const scriptDir = __dirname || path.dirname(new URL(import.meta.url).pathname);
const projectRoot = path.resolve(scriptDir, '..');
const docsDir = path.resolve(projectRoot, 'src');
const outputPath = path.resolve(projectRoot, '.vitepress/sidebar.json');

console.log(`Scanning directory: ${docsDir}`);

// Generate sidebar and save to JSON file
export const sidebar = generateSidebar(docsDir);
fs.writeFileSync(outputPath, JSON.stringify(sidebar, null, 2));
console.log(`Sidebar JSON generated at ${outputPath}`);