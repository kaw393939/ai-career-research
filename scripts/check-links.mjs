import { readdir, readFile, stat } from 'node:fs/promises'
import { resolve, join } from 'node:path'

const output = resolve('docs/.vitepress/dist')
const base = '/ai-career-research/'
const origin = 'https://kaw393939.github.io'
const failures = []
let pages = 0
let links = 0

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = join(directory, entry.name)
    if (entry.isDirectory()) await walk(file)
    else if (entry.name.endsWith('.html')) await check(file)
  }
}

async function check(file) {
  pages++
  const html = await readFile(file, 'utf8')
  const pageUrl = new URL(base + file.slice(output.length + 1), origin)
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const value = match[1].replaceAll('&amp;', '&')
    if (!value || value.startsWith('#') || /^(mailto:|tel:|data:|javascript:)/.test(value)) continue
    const url = new URL(value, pageUrl)
    if (url.origin !== origin) continue
    links++
    if (!url.pathname.startsWith(base)) {
      failures.push(`${file}: link escapes GitHub Pages base: ${value}`)
      continue
    }
    const relative = decodeURIComponent(url.pathname.slice(base.length))
    const target = resolve(output, relative || 'index.html')
    try {
      const info = await stat(target)
      if (info.isDirectory()) await stat(join(target, 'index.html'))
    } catch {
      failures.push(`${file}: missing local target: ${value}`)
    }
  }
}

await walk(output)
if (failures.length) {
  console.error(failures.join('\n'))
  process.exitCode = 1
} else {
  console.log(`Verified ${links} internal links and assets across ${pages} generated pages, including the GitHub Pages base path.`)
}
