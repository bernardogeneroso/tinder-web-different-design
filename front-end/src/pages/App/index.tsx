import Header from '../../components/app/Header'

import { Container, ContainerOptions, Content } from './styles'

export default function App() {
  return (
    <Container>
      <Header />

      <ContainerOptions>
        <Content>Olá</Content>
      </ContainerOptions>
    </Container>
  )
}
