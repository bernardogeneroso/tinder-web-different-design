import { InputHTMLAttributes } from 'react'

import { Container } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  errorMessage?: string
  label: string
  type?: 'text' | 'textarea'
}

export default function InputAboutYou({
  errorMessage = '',
  type = 'text',
  label,
  ...rest
}: InputProps) {
  return (
    <Container isError={!!errorMessage}>
      <div className="label">
        <span>{label}</span>
      </div>

      {type === 'text' ? <input type="text" {...rest} /> : <textarea />}

      {errorMessage && <span className="error">{errorMessage}</span>}
    </Container>
  )
}
