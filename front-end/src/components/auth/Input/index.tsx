import { InputHTMLAttributes } from 'react'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { UseFormRegister } from 'react-hook-form'

import { Container, Content } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>
  errorMessage: string | undefined
}

export default function Input({
  name = 'email',
  type = 'text',
  errorMessage,
  register,
  ...rest
}: InputProps) {
  return (
    <Container>
      <Content error={!!errorMessage}>
        <div className="icon">
          {name === 'email' ? (
            <FiMail size={20} color={errorMessage ? '#fe5166' : '#303742'} />
          ) : name === 'username' ? (
            <FiUser size={20} color={errorMessage ? '#fe5166' : '#303742'} />
          ) : (
            <FiLock size={20} color={errorMessage ? '#fe5166' : '#303742'} />
          )}
        </div>

        <input
          type={name === 'password' ? 'password' : type}
          {...register(name)}
          {...rest}
        />
      </Content>

      {errorMessage && <p className="error">{errorMessage}</p>}
    </Container>
  )
}
