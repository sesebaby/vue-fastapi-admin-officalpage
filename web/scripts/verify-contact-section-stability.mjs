import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const rootDir = path.resolve(process.cwd())
const contactSectionPath = path.join(rootDir, 'src', 'components', 'sections', 'ContactSection.vue')
const source = fs.readFileSync(contactSectionPath, 'utf8')

const errors = []

if (!source.includes("import L from 'leaflet'")) {
  errors.push('ContactSection does not import Leaflet.')
}

if (!source.includes("import 'leaflet/dist/leaflet.css'")) {
  errors.push('ContactSection does not load Leaflet CSS.')
}

if (!source.includes('L.map(') || !source.includes('openstreetmap')) {
  errors.push('ContactSection does not initialize a Leaflet map backed by OpenStreetMap tiles.')
}

if (source.includes('api.map.baidu.com/getscript') || source.includes('loadBaiduMapAPI') || source.includes('initBaiduMap')) {
  errors.push('ContactSection still contains Baidu Map script loading logic.')
}

if (source.includes("t('website.contact.email')") || source.includes('$t(\'website.contact.email\')')) {
  errors.push('ContactSection still resolves website.contact.email through vue-i18n runtime translation.')
}

if (errors.length) {
  console.error('Contact section stability check failed:')
  errors.forEach((error, index) => {
    console.error(`${index + 1}. ${error}`)
  })
  process.exit(1)
}

console.log('Contact section stability check passed.')
