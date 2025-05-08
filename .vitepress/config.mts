import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress'
// Fix the import path - use ./sidebar.json instead of ../vitepress/sidebar.json
import sidebarJson from './sidebar.json' 
import path from 'path'

export default defineConfig({
  title: "Tortal Tech File Shell",
  description: "The Tortal Tech File Shell library provides seamless file system operations with easy-to-use commands.",
  vite: {
    server: {
      allowedHosts: true,
    }
  },
  // Use path.resolve for accurate directory resolution
  srcDir: path.resolve(__dirname, '../src'),
  sitemap: { hostname: 'https://tortal.tech/tortal-shell-docs' },
  base: '/tortal-shell-docs/',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/usage-examples' }
    ],
    sidebar: sidebarJson as DefaultTheme.Sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ethan-hann/ethan-hann.github.io' }
    ],
    search: {
      provider: 'local'
    }
  }
})