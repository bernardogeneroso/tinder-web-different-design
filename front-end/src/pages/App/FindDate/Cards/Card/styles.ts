import styled from 'styled-components'
import { animated } from 'react-spring'

export const Container = styled(animated.div)`
  touch-action: none;
  position: absolute;
  width: 100vw;
  will-change: transform;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Background = styled(animated.div)`
  touch-action: none;
  background: url('https://avataaars.io/?avatarStyle=Transparent&topType=LongHairCurvy&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Tanned');
  background-color: white;
  background-size: auto 85%;
  background-repeat: no-repeat;
  background-position: center center;
  width: 45vh;
  max-width: 300px;
  height: 48vh;
  max-height: 570px;
  will-change: transform;
  border-radius: 10px;
  box-shadow: 0 12.5px 100px -10px rgb(50 50 73 / 40%),
    0 10px 10px -10px rgb(50 50 73 / 30%);
`
