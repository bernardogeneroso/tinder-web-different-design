import { useSpring, config } from 'react-spring'

import Menu from './Menu'
import Profile from './Profile'
import Gender from './Gender'
import Steps from '../../components/auth/Steps'

import { Container, AnimationContainer } from './styles'

export default function SignUpStep3() {
  const styles = useSpring({
    to: { opacity: 1, scale: 1, translateY: 0 },
    from: { opacity: 0, scale: 0, translateY: -250 },
    config: config.gentle,
  })

  return (
    <Container>
      <Steps step={3} />

      <AnimationContainer style={styles}>
        <h1>About you</h1>

        <Menu menuOption="Profile" />

        <Profile />
        <Gender />
      </AnimationContainer>
    </Container>
  )
}
