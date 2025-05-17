// scripts/generate-sidebar.ts
import fs from 'fs';
import path from 'path';

type SidebarEntry =
  | { text: string; link: string }
  | { text: string; collapsed: boolean; items: SidebarEntry[] };

function generateSidebar(dir: string, baseDir: string = dir): SidebarEntry[] {
  const result: SidebarEntry[] = [];

  for (const file of fs.readdirSync(dir, { withFileTypes: true })) {
    if (file.name.startsWith('.')) continue;

    const absolutePath = path.join(dir, file.name);
    const relativePath = path.relative(baseDir, absolutePath);
    const routePath = relativePath.replace(/\\/g, '/').replace(/\.md$/, '');

    if (file.isDirectory()) {
      const children = generateSidebar(absolutePath, baseDir);
      if (children.length === 0) continue;

      // Detect and extract index.md for the group intro
      const indexPath = '/' + path.join(path.relative(baseDir, absolutePath)).replace(/\\/g, '/');
      const indexEntry = children.find(
        (child) => typeof child === 'object' && 'link' in child && child.link === indexPath
      );
      const items = children.filter(
        (child) => !(typeof child === 'object' && 'link' in child && child.link === indexPath)
      );

      if (indexEntry && 'link' in indexEntry) {
        items.unshift({ text: 'Introduction', link: indexEntry.link });
      }

      result.push({
        text: file.name.charAt(0).toUpperCase() + file.name.slice(1).replace(/[-_]/g, ' '),
        collapsed: false,
        items
      });
    } else if (file.name.endsWith('.md')) {
      const name = file.name.replace(/\.md$/, '');
      let link = '';

      if (name === 'index' || name === 'README') {
        if (dir === baseDir) {
          link = '/';
          result.push({ text: 'Introduction', link });
        } else {
          // Will be added as group intro item later
          result.push({ text: '__group_index__', link: '/' + path.dirname(routePath) });
        }
      } else {
        link = '/' + routePath;
        result.push({
          text: name.charAt(0).toUpperCase() + name.slice(1).replace(/[-_]/g, ' '),
          link
        });
      }
    }
  }

  // Remove internal placeholder items
  return result.filter((entry) => !(typeof entry === 'object' && entry.text === '__group_index__'));
}

// Paths
const scriptDir = __dirname || path.dirname(new URL(import.meta.url).pathname);
const projectRoot = path.resolve(scriptDir, '..');
const docsDir = path.resolve(projectRoot, 'src');
const outputPath = path.resolve(projectRoot, '.vitepress/sidebar.json');

// Run
console.log(`📁 Scanning docs: ${docsDir}`);
const sidebar = generateSidebar(docsDir);
fs.writeFileSync(outputPath, JSON.stringify(sidebar, null, 2));
console.log(`✅ Sidebar written to ${outputPath}`);
