import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress'
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
      { text: 'Guide', link: '/guide/' },
      { text: 'Reference', link: '/reference/' },
      { text: 'API', link: 'https://tortal.tech/terminal/api'}
    ],
    sidebar: sidebarJson as DefaultTheme.Sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ethan-hann/tortal-shell-docs' }
    ],
    search: {
      provider: 'local'
    }
  }
})