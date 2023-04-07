import { useAppSelector } from '../hooks/hooks'
import AddMarama from './AddMarama'
import MoonPhase from './MoonPhase'

export default function MoonPhaseList() {
  const marama = useAppSelector((state) => state.marama)
  return (
    <div>
      <div className="columns is-multiline">
        {marama.data.map((moonPhase, i) => {
          return (
            <>
              <div className="column is-one-quarter">
                <MoonPhase
                  key={i}
                  phaseDescription={moonPhase.phaseDescription}
                  phaseName={moonPhase.phaseName}
                  id={moonPhase.id}
                />
              </div>
            </>
          )
        })}
        <div className="column is-one-quarter">
          <AddMarama />
        </div>
      </div>
    </div>
  )
}
