import { useAppSelector } from '../hooks/hooks'
import ErrorMessage from './ErrorMessage'
import MoonPhaseList from './MoonPhaseList'
import WaitIndicator from './WaitIndicator'

function Marama() {
  const marama = useAppSelector((state) => state.marama)

  if (marama.isLoading) {
    return <WaitIndicator />
  }

  if (marama.error) {
    return <ErrorMessage message={marama.error} />
  }
  console.log(marama.data)
  return <MoonPhaseList marama={marama.data} />
}

export default Marama
