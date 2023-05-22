import { useCallback, useState } from 'react'
import DeleteMarama from './DeleteMarama'
import UpdateMarama from './UpdateMarama'
import JournalInputForm from './JournalInputForm'

interface Props {
  phaseName: string
  phaseDescription: string
  id: number
}

function MoonPhase({ phaseName, phaseDescription, id }: Props) {
  const [showUpdateForm, setShowUpdateForm] = useState(false)
  const [showJournalInputForm, setShowJournalInputForm] = useState(false)

  const toggleJournalInputForm = useCallback(() => {
    setShowJournalInputForm((prevState) => !prevState)
  }, [setShowJournalInputForm])

  const toggleUpdateForm = useCallback(() => {
    setShowUpdateForm((prevState) => !prevState)
  }, [setShowUpdateForm])

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
          showForm={toggleUpdateForm}
        />
      )}

      <button
        className="button is-primary is-small is-inverted is-responsive"
        onClick={toggleJournalInputForm}
      >
        Add Journal Entry
      </button>
      {showJournalInputForm && <JournalInputForm phaseId={id} />}
    </article>
  )
}

export default MoonPhase
