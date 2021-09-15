import styled from 'styled-components'
import { animated } from 'react-spring'

interface StepProps {
  isActive?: boolean
}

export const Container = styled(animated.div)`
  width: 100%;
  background: #fff;
  height: 46px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;

  div.content {
    height: 100%;
    display: flex;
    flex-direction: row;
  }

  div.line {
    width: 100%;
    background: linear-gradient(to right, #fd297b, #ff5864, #ff655b);
    height: 2px;
  }
`

export const Step = styled.div<StepProps>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => (props.isActive ? '#FE5166' : '#7A7878')};

  font-size: 1.6rem;
`
