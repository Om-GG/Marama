import express from 'express'
import path from 'path'
import moonPhaseRoutes from './routes/moonPhase'
import journalInputRoutes from './routes/journalInput'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

//adds /api/v1/moonPhases to the beginning of all moonPhaseRoutes
server.use('/api/v1/moonPhases', moonPhaseRoutes)

//adds /api/v1/journalInputs to the beginning of all journalInputRoutes
server.use('/api/v1/journalInputs', journalInputRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})
export default server
