import { useState } from 'react'
import DeleteMarama from './DeleteMarama'
import UpdateMarama from './UpdateMarama'

interface Props {
  phaseName: string
  phaseDescription: string
  id: number
}

function MoonPhase({ phaseName, phaseDescription, id }: Props) {
  const [showUpdateForm, setShowUpdateForm] = useState(false)

  const toggleUpdateForm = () => {
    setShowUpdateForm(!showUpdateForm)
  }

  return (
    <article className="notification is-black">
      <p className="title">{phaseName}</p>
      <p className="subtitle">{phaseDescription}</p>
      <DeleteMarama id={id} />
      <button
        className="button is-primary is-small is-inverted is-responsive"
        onClick={toggleUpdateForm}
      >
        Edit
      </button>

      {showUpdateForm && (
        <UpdateMarama
          id={id}
          phaseName={phaseName}
          phaseDescription={phaseDescription}
        />
      )}
    </article>
  )
}

export default MoonPhase
