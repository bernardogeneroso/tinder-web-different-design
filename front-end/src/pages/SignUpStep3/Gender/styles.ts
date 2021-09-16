import styled, { css } from 'styled-components'
import { animated } from 'react-spring'

interface GenderContentProps {
  isActive?: boolean
}

export const Container = styled(animated.div)`
  width: 100%;
  cursor: grab;
  touch-action: pan-y;
  will-change: transform;
  user-select: none;
  padding: 0 1rem;
`
export const GenderContent = styled(animated.div)<GenderContentProps>`
  position: relative;
  cursor: pointer;
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem;
  background: #fff;
  border-radius: 1.5rem;
  border: 0.1rem solid #e8e6ea;
  margin: 0 auto;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.95);
  }

  & + div {
    margin-top: 1rem;
  }

  span {
    color: #000;
    font-size: 1.6rem;
    font-weight: 400;
  }

  svg {
    color: #adafbb;
  }

  ${(props) =>
    props.isActive &&
    css`
      span {
        color: #fff;
      }

      svg {
        color: #fff;
      }
    `}
`
