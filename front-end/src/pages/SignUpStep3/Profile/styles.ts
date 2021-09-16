import styled from 'styled-components'
import { transparentize } from 'polished'
import { animated } from 'react-spring'

interface ButtonProps {
  color: 'red' | 'grey'
}

export const Container = styled(animated.div)`
  width: 100%;
  padding: 0 1rem;
  height: 100%;
  cursor: grab;
`

export const Header = styled.div`
  div.container-image {
    display: inline-block;
    position: relative;

    img {
      width: 100px;
      height: 100px;
      border-radius: 3rem;
    }

    div.camera {
      cursor: pointer;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 34px;
      height: 34px;
      background: #e94057;
      border-radius: 3rem;
      border: 3px solid #fff;
      right: -3px;
      bottom: -2px;

      transition: transform 0.2s;

      &:hover {
        transform: scale(0.92);
      }
    }
  }
`

export const Content = styled.div`
  margin-top: 2.6rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const ContainerUserInformation = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContainerUserDetailsInformation = styled.div``

const colorButton = {
  red: '#E94057',
  grey: '#7A7878',
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  width: 100%;
  color: ${(props) => colorButton[props.color]};
  background-color: ${(props) => transparentize(0.8, colorButton[props.color])};
  outline: 0;
  border: 0;
  height: 56px;
  font-size: 1.4rem;
  font-weight: bold;
  border-radius: 1.5rem;
  text-align: start;
  padding: 2rem;
  margin-top: 1.6rem;
  margin-bottom: 1rem;

  transition: filter 0.2s;

  svg {
    margin-right: 0.8rem;
  }

  &:hover {
    filter: brightness(0.8);
  }
`
