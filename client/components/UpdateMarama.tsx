/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react'
import { useAppDispatch } from '../hooks/hooks'
import { NewMoonPhase, MoonPhase } from '../../models/MoonPhase'
import { updateMarama } from '../actions/moonPhase'

interface Props {
  id: number
}

function UpdateMarama(props: Props) {
  const dispatch = useAppDispatch()
  const [phaseName, setPhaseName] = useState('')
  const [phaseDescription, setPhaseDescription] = useState('')

  const handlePhaseNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhaseName(e.target.value)
  }

  const handlePhaseDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPhaseDescription(e.target.value)
  }
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const newMarama: MoonPhase = {
      id: props.id,
      phaseName: phaseName,
      phaseDescription: phaseDescription,
    }
    console.log(newMarama)
    dispatch(updateMarama(newMarama))
    clearForm()
  }

  function clearForm() {
    setPhaseName('')
    setPhaseDescription('')
  }
  return (
    <form onSubmit={handleSubmit} aria-label="Update Marama">
      <div>
        <div className="field">
          <label className="label" htmlFor="phaseName">
            Name
          </label>
          <div className="control">
            <input
              className="input is-success"
              type="text"
              placeholder="Ko wai te marama??"
              name="phaseName"
              id="phaseName"
              value={phaseName}
              onChange={handlePhaseNameChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor="phaseDescription">
            Description
          </label>
          <div className="control">
            <textarea
              className="textarea is-success"
              placeholder="He whakaro?"
              name="phaseDescription"
              id="phaseDescription"
              value={phaseDescription}
              onChange={handlePhaseDescriptionChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-success">Update</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default UpdateMarama
