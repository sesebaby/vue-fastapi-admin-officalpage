import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const rootDir = path.resolve(process.cwd())

const files = {
  globalStyles: path.join(rootDir, 'src', 'styles', 'global.scss'),
  websiteLayout: path.join(rootDir, 'src', 'layout', 'website', 'index.vue'),
  casesPage: path.join(rootDir, 'src', 'views', 'website', 'cases', 'index.vue'),
  newsPage: path.join(rootDir, 'src', 'views', 'website', 'news', 'index.vue'),
}

const read = filePath => fs.readFileSync(filePath, 'utf8')

const errors = []

const globalStyles = read(files.globalStyles)
if (/html\s*,\s*[\r\n]+body\s*\{[\s\S]*overflow:\s*hidden;/.test(globalStyles)) {
  errors.push('global.scss still disables native page scrolling on html/body via overflow: hidden.')
}

const websiteLayout = read(files.websiteLayout)
if (/<n-layout(?=[\s>])[^>]*position="absolute"/.test(websiteLayout)) {
  errors.push('website layout still uses <n-layout position="absolute">.')
}

const casesPage = read(files.casesPage)
if (/<n-layout\b/.test(casesPage)) {
  errors.push('cases page still uses a nested n-layout wrapper.')
}
if (/\.cases-list-page\s*\{[\s\S]*min-height:\s*100vh;/.test(casesPage)) {
  errors.push('cases page still forces .cases-list-page to min-height: 100vh.')
}

const newsPage = read(files.newsPage)
if (/<n-layout\b/.test(newsPage)) {
  errors.push('news page still uses a nested n-layout wrapper.')
}
if (/\.news-list-page\s*\{[\s\S]*min-height:\s*100vh;/.test(newsPage)) {
  errors.push('news page still forces .news-list-page to min-height: 100vh.')
}

if (errors.length) {
  console.error('Website layout regression check failed:')
  errors.forEach((error, index) => {
    console.error(`${index + 1}. ${error}`)
  })
  process.exit(1)
}

console.log('Website layout regression check passed.')
