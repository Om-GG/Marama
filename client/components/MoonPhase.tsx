import DeleteMarama from './DeleteMarama'
import UpdateMarama from './UpdateMarama'

interface Props {
  phaseName: string
  phaseDescription: string
  id: number
}

function MoonPhase({ phaseName, phaseDescription, id }: Props) {
  return (
    <article className="notification is-black">
      <p className="title">{phaseName}</p>
      <p className="subtitle">{phaseDescription}</p>
      <DeleteMarama id={id} />
      <UpdateMarama id={id} />
    </article>
  )
}
export default MoonPhase