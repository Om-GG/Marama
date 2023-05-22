interface Props {
  message: string
}

function ErrorMessage({ message }: Props) {
  return <div className="error">{message}</div>
}

export default ErrorMessage
