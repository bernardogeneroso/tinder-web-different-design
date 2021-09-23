import { useCallback } from 'react'

import Header from '../../../components/app/Header'
import Cards from './Cards'

import { Container, ContainerContent } from './styles'

export default function FindDate() {
  const handleCardSwipe = useCallback((swipe: 'left' | 'right') => {
    console.log(swipe)
  }, [])

  return (
    <Container>
      <Header />

      <ContainerContent>
        <Cards {...{ handleCardSwipe }} />
      </ContainerContent>
    </Container>
  )
}
