import { shade } from 'polished'
import styled from 'styled-components'
import { animated } from 'react-spring'

import forgetPasswordBackground from '../../../assets/background-forget-password.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
  justify-content: center;
  overflow: hidden;
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;
`

export const Background = styled(animated.div)`
  flex: 1;
  background: url(${forgetPasswordBackground}) no-repeat center;
  background-size: cover;
  background-position-y: bottom;

  @media only screen and (max-width: 1100px) {
    display: none;
  }
`
export const AnimationContainer = styled(animated.div)`
  width: 100%;
  max-width: 320px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 126px;
    height: 126px;
    margin-bottom: 7rem;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;

    h1 {
      margin-bottom: 2.4rem;
      font-size: 2.4rem;
      text-align: center;
      color: #fe5166;
    }

    a {
      text-align: center;
      align-self: center;
      cursor: pointer;
      margin-top: 2.4rem;
      font-size: 1.6rem;
      font-weight: 400;
      color: #fe5166;

      transition: color 0.2s;

      &:hover {
        color: ${shade(0.25, '#fe5166')};
      }
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
