import styled from 'styled-components'
import { animated } from 'react-spring'

export const Container = styled(animated.div)`
  width: 100%;
  cursor: grab;
  touch-action: pan-y;
  will-change: transform;
  user-select: none;
  padding: 0 1rem;
`

export const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  padding: 2rem;

  p {
    text-align: start;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
  }
`
