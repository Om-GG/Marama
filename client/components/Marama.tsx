import { getMarama } from '../actions/moonPhase'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
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
      {isLoading && <WaitIndicator />}
      {error && <p>{error}</p>}

      {data ? (
        <MoonPhaseList />
      ) : (
        <div>
          <p>No data!</p>
        </div>
      )}
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
