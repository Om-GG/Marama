interface Props {
  phaseName: string
  phaseDescription: string
}

function MoonPhase({ phaseName, phaseDescription }: Props) {
  return (
    <div>
      <h4>{phaseName}</h4>
      <b />
      <p>{phaseDescription}</p>
    </div>
  )
}
export default MoonPhase

// console.log(MoonPhase({phaseName, phaseDescription}: Props))
