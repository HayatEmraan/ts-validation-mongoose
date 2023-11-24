import express, { Request, Response, urlencoded } from 'express'
import router from './app/modules/student.route'
const app = express()

app.use(express.json())
app.use(urlencoded({ extended: true }))
app.use(express.text())

app.use('/api/v1', router)

app.get('/', (req: Request, res: Response) => {
  res.send('server is running')
})

export default app
