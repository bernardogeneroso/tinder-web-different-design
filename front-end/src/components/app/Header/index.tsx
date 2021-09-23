import { useSpring } from 'react-spring'
import { FiPower } from 'react-icons/fi'

import { Container, Content, ContentUser } from './styles'

import tinderLogo from '../../../assets/tinder-logo.png'

export default function Header() {
  const styles = useSpring({
    from: { translateY: -220, scale: 0.5, opacity: 0 },
    to: { translateY: 0, scale: 1, opacity: 1 },
  })

  return (
    <Container style={styles}>
      <Content>
        <img src={tinderLogo} alt="Tinder" />

        <ContentUser>
          <img src="https://eu.ui-avatars.com/api/?size=256" alt="Avatar" />

          <div className="welcome-message">
            <span className="welcome">Welcome,</span>
            <span className="username">Bernardo Generoso</span>
          </div>
        </ContentUser>
      </Content>

      <FiPower />
    </Container>
  )
}
