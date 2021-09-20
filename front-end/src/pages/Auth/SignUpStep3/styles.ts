import styled from 'styled-components'
import { animated } from 'react-spring'

export const Container = styled.div`
  background: #f1f1f1;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 4.6rem 0 0 0;
  overflow: hidden;
`

export const AnimationContainer = styled(animated.div)`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  h1 {
    margin-bottom: 2.7rem;
    font-size: 2.2rem;
    color: #7a7878;
    font-weight: bold;
  }
`
