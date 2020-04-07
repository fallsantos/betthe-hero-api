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

app.get('/', (req, res) => {
  return res.json(
    {
      name: 'Be The Hero api',
      version: '0.1',
      author: [
        {
          name: 'Flávio Santos',
          rule: 'Fullstack developer',
          email: 'fallsantosdev@hotmail.com',
          github: 'https://github.com/fallsantos',
          linkedin: 'https://www.linkedin.com/in/fall-santos-23bb87103/'
        }
      ]
    }
  )
})

app.use('/ongs', routes)

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}...`)
})
