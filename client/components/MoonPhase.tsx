import DeleteMarama from './DeleteMarama'

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
    </article>
  )
}
export default MoonPhase

// console.log(MoonPhase({phaseName, phaseDescription}: Props))
