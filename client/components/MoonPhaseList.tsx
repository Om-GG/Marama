import { useAppSelector } from '../hooks/hooks'
import DeleteMarama from './DeleteMarama'
import MoonPhase from './MoonPhase'

export default function MoonPhaseList() {
  const marama = useAppSelector((state) => state.marama)
  return (
    <div>
      {marama.data.map((moonPhase, i) => {
        return (
          <>
            <div className="content is-normal">
              <MoonPhase
                key={i}
                phaseDescription={moonPhase.phaseDescription}
                phaseName={moonPhase.phaseName}
              />
              <DeleteMarama key={`x${i}`} id={moonPhase.id} />
            </div>
          </>
        )
      })}
    </div>
  )
}
