import styled from 'styled-components'
import { animated } from 'react-spring'

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled(animated.div)`
  touch-action: none;
  height: 700px;
  cursor: grab;
  background: #fff;
  max-width: 360px;
  width: 100%;
  padding: 2rem;
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;

  header {
    margin-top: -1rem;

    div.drag-bar {
      margin: auto;
      width: 48px;
      height: 4px;
      background: #ebebf0;
      border-radius: 100px;
    }
  }
`
