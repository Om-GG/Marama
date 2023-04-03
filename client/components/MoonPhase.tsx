interface Props {
  phaseName: string
  phaseDescription: string
}

function MoonPhase({phaseName, phaseDescription}: Props) {
  return (
    <div>
      <p>{phaseName}</p>
      <b />
      <p>{phaseDescription}</p>
    </div>
  )
}
export default MoonPhase