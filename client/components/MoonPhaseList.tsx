import { MoonPhase as MoonPhaseData } from '../../models/MoonPhase'
import MoonPhase from './MoonPhase'

interface Props {
  marama: MoonPhaseData[]
}

export default function MoonPhaseList({ marama }: Props) {
  return (
    <div>
      {marama.map((moonPhase, i) => {
        return (
          <MoonPhase
            key={i}
            phaseDescription={moonPhase.phaseDescription}
            phaseName={moonPhase.phaseName}
          />
        )
      })}
    </div>
  )
}
