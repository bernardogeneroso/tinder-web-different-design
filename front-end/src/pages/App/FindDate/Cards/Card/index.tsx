import { SpringValue } from 'react-spring'
import { Container, Background } from './styles'

interface CardProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bind: any
  index: number
  style: {
    x: SpringValue<number>
    y: SpringValue<number>
    rot: SpringValue<number>
    scale: SpringValue<number>
  }
}

export default function Card({ bind, index, style }: CardProps) {
  return (
    <Container
      style={{
        x: style.x,
        y: style.y,
      }}
    >
      <Background
        style={{
          rotateY: style.rot,
          rotateZ: style.rot,
          scale: style.scale,
          perspective: 1500,
          rotateX: 30,
        }}
        {...bind(index)}
      />
    </Container>
  )
}
