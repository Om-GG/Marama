import { deleteMarama } from '../../actions/moonPhase'
import { useAppDispatch } from '../../hooks/hooks'
interface Props {
  id: number
}

function DeleteMarama(props: Props) {
  const dispatch = useAppDispatch()

  function handleClick() {
    dispatch(deleteMarama(props.id))
  }

  return (
    <button className="delete" onClick={handleClick}>
      Delete Marama
    </button>
  )
}
export default DeleteMarama
