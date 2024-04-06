import express, { Application, json } from 'express'
import { route } from './routes/index.routes'
import { handleErrors } from './middlewares/handleErros.middleware'

const app: Application = express()
app.use(json())

app.use("/",route)

app.use(handleErrors)

export default app
