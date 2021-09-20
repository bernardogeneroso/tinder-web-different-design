import styled, { css } from 'styled-components'
import { animated } from 'react-spring'

interface ContentProps {
  isActive?: boolean
}

export const Container = styled.div`
  position: relative;
  text-align: start;
  width: 100%;
`

export const ContainerGender = styled(animated.div)`
  position: absolute;
  background: #fff;
  width: 100%;
  margin-top: 1rem;
  border-radius: 1.5rem;
  padding: 1rem;
  box-shadow: 0px 4px 8px -7px #000000, 5px 0px 15px 5px rgb(0 0 0 / 0%);
`

export const Content = styled.div<ContentProps>`
  color: #000;
  padding: 1rem;
  border-radius: 1.5rem;
  border: 0.1rem solid #e8e6ea;

  & + div {
    margin-top: 0.6rem;
  }

  transition: background-color 0.2s;

  &:hover {
    color: #fff;
    background-color: #fe5166;
  }

  ${(props) =>
    props.isActive &&
    css`
      color: #fff;
      background-color: #fe5166;
    `}
`
