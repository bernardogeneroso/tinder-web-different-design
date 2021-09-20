import styled from 'styled-components'
import { animated } from 'react-spring'

export const Container = styled.div`
  margin-top: 3.2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  overflow-y: auto;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const ContentInterest = styled(animated.div)`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  padding: 1.2rem 1.6rem;
  border-radius: 1.5rem;
  border: 0.1rem solid #e8e6ea;

  svg {
    margin-right: 0.8rem;
  }
`
