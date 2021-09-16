import styled from 'styled-components'
import { animated } from 'react-spring'

interface ContentProps {
  isActive?: boolean
}

export const Container = styled.div`
  margin: auto;
  width: 100%;
  max-width: 380px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2rem;
`

export const Content = styled(animated.div)<ContentProps>`
  cursor: pointer;
  margin-bottom: 0.8rem;

  div.text {
    color: ${(props) => (props.isActive ? '#fe5166' : '#7A7878')};
    font-size: 16px;
    font-weight: 500;
  }

  div.line {
    margin-top: 1.5rem;
    width: 100px;
    background: linear-gradient(to right, #fd297b, #ff5864, #ff655b);
    height: 2px;
  }
`
