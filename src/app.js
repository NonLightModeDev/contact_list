import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import routes from './routes/index.js'

const __filename = fileURLToPath(import.meta.url) // Transforma uma URL do tipo file:// em um caminho do sistema operacional.
const __dirname = path.dirname(__filename) // Pega somente o caminho do diretório onde app.js está

const app = express()

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)

export default app