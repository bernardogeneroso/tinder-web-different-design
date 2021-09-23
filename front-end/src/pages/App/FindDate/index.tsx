import Header from '../../../components/app/Header'
import Cards from './Cards'

import { Container, ContainerContent } from './styles'

export default function FindDate() {
  return (
    <Container>
      <Header />

      <ContainerContent>
        <Cards />
      </ContainerContent>
    </Container>
  )
}
