import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import routes from './routes'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use('/users', routes)

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}...`)
})
