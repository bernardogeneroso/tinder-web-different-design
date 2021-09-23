import Header from '../../components/app/Header'
import Button from '../../components/app/Button'

import { Container, ContainerOptions, Content } from './styles'

import findDate from '../../assets/findDate.png'
import messages from '../../assets/messages.png'
import profile from '../../assets/profile.png'

export default function App() {
  return (
    <Container>
      <Header />

      <ContainerOptions>
        <Content to="/app/find-date">
          <img src={findDate} alt="Find date" />

          <Button>Find date</Button>
        </Content>
        <Content to="/app">
          <img src={messages} alt="Messages" />

          <Button>Messages</Button>
        </Content>
        <Content to="/app">
          <img src={profile} alt="Profile" />

          <Button>Profile</Button>
        </Content>
      </ContainerOptions>
    </Container>
  )
}
