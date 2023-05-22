import { useAppSelector } from '../../hooks/hooks'
import AddMarama from './AddMarama'
import MoonPhase from './MoonPhase'

export default function MoonPhaseList() {
  const { data, error } = useAppSelector((state) => state.marama)

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      <div className="columns is-multiline">
        {data.map((moonPhase, i) => {
          return (
            <div className="column is-one-quarter" key={i}>
              <MoonPhase
                key={moonPhase.id}
                phaseDescription={moonPhase.phaseDescription}
                phaseName={moonPhase.phaseName}
                id={moonPhase.id}
              />
            </div>
          )
        })}
        <div className="column is-one-quarter">
          <AddMarama />
        </div>
      </div>
    </div>
  )
}
