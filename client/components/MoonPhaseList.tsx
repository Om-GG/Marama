import { useAppSelector } from '../hooks/hooks'
import MoonPhase from './MoonPhase'

export default function MoonPhaseList() {
  const marama = useAppSelector((state) => state.marama)
  return (
    <div>
      {marama.data.map((moonPhase, i) => {
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
