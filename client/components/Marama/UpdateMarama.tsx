/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react'
import { useAppDispatch } from '../../hooks/hooks'
import { MoonPhase } from '../../../models/moonPhase'
import { updateMarama } from '../../actions/moonPhase'

interface Props {
  id: number
  phaseName: string
  phaseDescription: string
  showForm: () => void
}

function UpdateMarama(props: Props) {
  const dispatch = useAppDispatch()
  const [phaseName, setPhaseName] = useState(props.phaseName)
  const [phaseDescription, setPhaseDescription] = useState(
    props.phaseDescription
  )

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
    dispatch(updateMarama(newMarama))
    clearForm()
  }

  function clearForm() {
    setPhaseName(phaseName)
    setPhaseDescription(phaseDescription)
    props.showForm()
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
              placeholder={phaseName}
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
              placeholder={phaseDescription}
              name="phaseDescription"
              id="phaseDescription"
              value={phaseDescription}
              onChange={handlePhaseDescriptionChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-success is-responsive">Update</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default UpdateMarama
