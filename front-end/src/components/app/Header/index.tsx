import { FiPower } from 'react-icons/fi'

import { Container, Content, ContentUser } from './styles'

import tinderLogo from '../../../assets/tinder-logo.png'

export default function Header() {
  return (
    <Container>
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
