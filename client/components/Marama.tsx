import { getMarama } from '../actions/moonPhase'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import AddMarama from './AddMarama'
import MoonPhaseList from './MoonPhaseList'
// import ErrorMessage from './ErrorMessage'
// import MoonPhaseList from './MoonPhaseList'
import WaitIndicator from './WaitIndicator'
import { useEffect } from 'react'

function Marama() {
  const { isLoading, error, data } = useAppSelector((state) => state.marama)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getMarama()).catch(console.error)
  }, [dispatch])
  console.log(data)

  return (
    <div>
      <div className="maramaHeader">
        <h1>He marama</h1>
      </div>
      <div className="marama">
        {isLoading && <WaitIndicator />}
        {error && <p role="paragraph">{error}</p>}
        <div className="maramaData">
          {data ? (
            <MoonPhaseList />
          ) : (
            <div>
              <p>No data!</p>
            </div>
          )}
        </div>
      </div>
      <AddMarama />
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
