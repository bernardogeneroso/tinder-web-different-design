import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { useSpring, config } from 'react-spring'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Button from '../../components/auth/Button'
import Input from '../../components/auth/Input'

import { Container, Content, Background, AnimationContainer } from './styles'

import tinderLogo from '../../assets/tinder-logo.png'

export interface FormData {
  email: string
}

const schemaForm = yup.object().shape({
  email: yup
    .string()
    .email('E-mail must be a valid email')
    .required('E-mail is a required field'),
})

export default function ForgetPassword() {
  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schemaForm),
  })

  const stylesContent = useSpring({
    to: { opacity: 1, scale: 1, translateY: 0 },
    from: { opacity: 0, scale: 0, translateY: -250 },
    config: config.gentle,
  })

  const stylesBackground = useSpring({
    to: { translateX: '0%', opacity: 1 },
    from: { translateX: '100%', opacity: 0 },
  })

  function handleSubmit(data: FormData) {
    console.log(data)
  }

  return (
    <Container>
      <Content>
        <AnimationContainer style={stylesContent}>
          <img src={tinderLogo} alt="Tinder" />

          <form onSubmit={onSubmit(handleSubmit)}>
            <h1>Forget my password</h1>

            <Input
              name="email"
              placeholder="E-mail"
              errorMessage={errors.email?.message}
              {...{ register }}
            />

            <Button type="submit" text="Continue" />
          </form>

          <Link to="/signin">
            <FiArrowLeft />
            Go back
          </Link>
        </AnimationContainer>
      </Content>
      <Background style={stylesBackground} />
    </Container>
  )
}
