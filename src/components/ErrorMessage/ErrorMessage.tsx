import { FC } from 'react'

interface ErrorMessageProps {
  children: string
}

const ErrorMessage: FC<ErrorMessageProps> = ({ children }) => {
  return (
    <div>
      <p>{children}</p>
    </div>
  )
}

export default ErrorMessage
