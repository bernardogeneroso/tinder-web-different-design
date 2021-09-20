import { shade } from 'polished'
import styled from 'styled-components'
import { animated } from 'react-spring'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AnimationContainer = styled(animated.div)`
  width: 380px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  div.information {
    h3 {
      color: #fe5166;
      font-size: 1.8rem;
      font-weight: bold;
      margin-bottom: 0.9rem;
    }
    p {
      color: #000;
      font-size: 1.6rem;
      font-weight: normal;
      line-height: 150%;

      span {
        color: #fe5166;
      }
    }

    > span {
      color: #7a7878;
      font-size: 1.1rem;
      font-weight: normal;
    }
  }

  a {
    display: flex;
    align-items: center;

    margin-top: 6rem;
    color: #fe5166;
    font-size: 1.6rem;
    font-weight: 400;
    text-decoration: none;

    transition: color 0.2s;

    &:hover {
      color: ${shade(0.25, '#fe5166')};
    }

    svg {
      margin-right: 0.8rem;
    }
  }
`
