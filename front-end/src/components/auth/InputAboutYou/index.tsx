import { InputHTMLAttributes, useRef } from 'react'

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
  const refInput = useRef<HTMLInputElement>(null)
  const refTextarea = useRef<HTMLTextAreaElement>(null)

  function handleClickContainer() {
    if (type === 'text') {
      refInput.current?.focus()
    } else {
      refTextarea.current?.focus()
    }
  }

  return (
    <Container isError={!!errorMessage} onClick={handleClickContainer}>
      <div className="label">
        <span>{label}</span>
      </div>

      {type === 'text' ? (
        <input type="text" ref={refInput} {...rest} />
      ) : (
        <textarea ref={refTextarea} />
      )}

      {errorMessage && <span className="error">{errorMessage}</span>}
    </Container>
  )
}
