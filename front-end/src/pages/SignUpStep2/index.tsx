import { useEffect } from 'react'
import { useSpring, config } from 'react-spring'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import Steps from '../../components/auth/Steps'

import { Container, AnimationContainer } from './styles'

interface Location {
  email?: string
}

export default function SignUpStep2() {
  const location = useLocation<Location>()
  const history = useHistory()

  const styles = useSpring({
    to: { opacity: 1, scale: 1, translateY: 0 },
    from: { opacity: 0, scale: 0, translateY: -250 },
    config: config.gentle,
  })

  useEffect(() => {
    if (!location.state?.email) {
      history.push('/signup')
    }
  }, [location, history])

  return (
    <Container>
      <Steps step={2} />

      <AnimationContainer style={styles}>
        <div className="information">
          <h3>E-mail verification</h3>

          <p>
            A verification email has been sent to email{' '}
            <span>{location.state?.email}</span> in order to continue. If you
            can&apos;t find it, look in the spam.
          </p>
          <span>Check your email, it may take up to 10 minutes...</span>
        </div>

        <Link to="/signup">
          <FiArrowLeft />
          Go back
        </Link>
      </AnimationContainer>
    </Container>
  )
}
