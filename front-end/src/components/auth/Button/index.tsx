import { ButtonHTMLAttributes } from 'react'

import { Container } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export default function Button({ text = '', ...rest }: ButtonProps) {
  return (
    <Container text={text} {...rest}>
      {text}
    </Container>
  )
}
