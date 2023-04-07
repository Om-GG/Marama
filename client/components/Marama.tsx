import { getMarama } from '../actions/moonPhase'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import MoonPhaseList from './MoonPhaseList'
// import ErrorMessage from './ErrorMessage'
// import MoonPhaseList from './MoonPhaseList'
import WaitIndicator from './WaitIndicator'
import { useEffect } from 'react'

function Marama() {
  const marama = useAppSelector((state) => state.marama)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getMarama()).catch(console.error)
  }, [dispatch])
  console.log(marama.data)
  return (
    <div>
      <div className="maramaHeader">
        <h1>He marama</h1>
      </div>
      <div className="marama">
        {marama.isLoading && <WaitIndicator />}
        {marama.error && <p role="paragraph">{marama.error}</p>}
        <div className="maramaData">
          {marama.data ? (
            <MoonPhaseList />
          ) : (
            <div>
              <p>No data!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Marama

// if (marama.isLoading) {
//   return <WaitIndicator />
// }

// if (marama.error) {
//   return <ErrorMessage message={marama.error} />
// }

// return <MoonPhaseList marama={marama.data} />
