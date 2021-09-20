import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { useSpring, config } from 'react-spring'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Button from '../../../components/auth/Button'
import Input from '../../../components/auth/Input'
import Steps from '../../../components/auth/Steps'

import { Container, Content, Background, AnimationContainer } from './styles'

import tinderLogo from '../../../assets/tinder-logo.png'

export interface FormData {
  username: string
  email: string
  password: string
}

const schemaForm = yup.object().shape({
  username: yup.string().required('Username is a required field'),
  email: yup
    .string()
    .email('E-mail must be a valid email')
    .required('E-mail is a required field'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is a required field'),
})

export default function SignUp() {
  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schemaForm),
  })

  const history = useHistory()

  const stylesContent = useSpring({
    to: { opacity: 1, scale: 1, translateY: 0 },
    from: { opacity: 0, scale: 0, translateY: -250 },
    config: config.gentle,
  })

  const stylesBackground = useSpring({
    to: { translateX: '0%', opacity: 1 },
    from: { translateX: '-100%', opacity: 0 },
  })

  function handleSubmit(data: FormData) {
    console.log(data)

    history.push({
      pathname: '/signup/step2',
      state: {
        email: data.email,
      },
    })
  }

  return (
    <Container>
      <Background style={stylesBackground} />
      <Content>
        <Steps step={1} />

        <AnimationContainer style={stylesContent}>
          <img src={tinderLogo} alt="Tinder" />

          <form onSubmit={onSubmit(handleSubmit)}>
            <h1>Create your account</h1>

            <Input
              name="username"
              placeholder="Username"
              errorMessage={errors.username?.message}
              {...{ register }}
            />
            <Input
              name="email"
              placeholder="E-mail"
              errorMessage={errors.email?.message}
              {...{ register }}
            />
            <Input
              name="password"
              placeholder="Password"
              errorMessage={errors.password?.message}
              {...{ register }}
            />

            <Button type="submit" text="Next step" />
          </form>

          <Link to="/signin">
            <FiArrowLeft />
            Go back
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  )
}
