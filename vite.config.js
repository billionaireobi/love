import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

const picsDir = path.join(process.cwd(), 'pics')
const publicPicsDir = path.join(process.cwd(), 'public', 'pics')

function copyPicsToPublic() {
  if (!fs.existsSync(picsDir)) return
  if (!fs.existsSync(publicPicsDir)) fs.mkdirSync(publicPicsDir, { recursive: true })
  for (const name of fs.readdirSync(picsDir)) {
    const src = path.join(picsDir, name)
    if (fs.statSync(src).isFile()) fs.copyFileSync(src, path.join(publicPicsDir, name))
  }
}

// Dev: serve project root /pics at /pics
function servePics() {
  return {
    name: 'serve-pics',
    configureServer(server) {
      server.middlewares.use('/pics', (req, res, next) => {
        const decoded = decodeURIComponent(req.url.split('?')[0])
        const filePath = path.join(process.cwd(), 'pics', decoded)
        if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) return next()
        res.setHeader('Content-Type', 'image/jpeg')
        fs.createReadStream(filePath).pipe(res)
      })
    },
  }
}

// Build: copy pics into public so they are included in dist
function copyPicsPlugin() {
  return {
    name: 'copy-pics',
    buildStart() {
      copyPicsToPublic()
    },
  }
}

export default defineConfig({
  plugins: [react(), servePics(), copyPicsPlugin()],
  base: './',
})
