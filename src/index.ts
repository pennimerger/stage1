import express, { Request, Response } from 'express'
import cors from "cors"
import { mathsproperties } from './worker'

const app = express()
app.use(cors())

app.get('/api/classify-number', async(req:Request, res:Response): Promise<void> => {
  const number = Number(req.query.number)
  // number param is not a valid integer
  if (!number || isNaN(number)) {
    res.status(400).json(
      {
        "number": "alphabet",
        "error": true
      }
    )
  }
  try {
    const response = await mathsproperties(number)
    res.json(response)
  } catch (error){
    res.status(500).send(error)
  }
})

app.listen(3033, () => {
  console.log(`Server started.`)
})