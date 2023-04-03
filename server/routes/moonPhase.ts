import express from 'express'
import { MoonPhase, MoonPhaseSnakeCase } from '../../models/MoonPhase'
// import checkJwt, { JwtRequest } from '../auth0'

import {
  getMoonPhases,
  addMoonPhase,
  updateMoonPhase,
  deleteMoonPhase,
} from '../db/moonPhase'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const moonPhases = await getMoonPhases()
    res.json({ moonPhases })
  } catch (err) {
    console.error(err)
    res.status(500).send('Something went wrong')
  }
})

router.post('/', async (req, res) => {
  try {
    const moonPhase = req.body
    const newMoonPhase: MoonPhaseSnakeCase = {
      phase_name: moonPhase.phaseName,
      phase_description: moonPhase.phaseDescription,
    }
    await addMoonPhase(newMoonPhase)
    const moonPhases = await getMoonPhases()
    res.json({ moonPhases })
  } catch (err) {
    console.error(err)
    res.status(500).send('Something went wrong')
  }
})

router.put('/', async (req, res) => {
  try {
    const moonPhase = req.body
    const newMoonPhase: MoonPhaseSnakeCase = {
      id: moonPhase.id,
      phase_name: moonPhase.phaseName,
      phase_description: moonPhase.phaseDescription,
    }
    await updateMoonPhase(newMoonPhase)
    const moonPhases = await getMoonPhases()
    res.json({ moonPhases })
  } catch (err) {
    console.error(err)
    res.status(500).send('Something went wrong')
  }
})
router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await deleteMoonPhase(id)
    const moonPhases = await getMoonPhases()
    res.json({ moonPhases })
  } catch (err) {
    console.error(err)
    res.status(500).send('Something went wrong')
  }
})

export default router
