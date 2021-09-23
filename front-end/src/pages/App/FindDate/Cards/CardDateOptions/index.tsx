import { useSpring, config } from 'react-spring'
import { useDrag } from '@use-gesture/react'

import { Container, Content } from './styles'

const Y = 120

export default function CardDateOptions() {
  const [{ height }, set] = useSpring(() => ({
    from: {
      height: Y,
    },
    config: config.gentle,
  }))

  const bind = useDrag(
    ({ movement, direction, distance, down, movement: [, my] }) => {
      const moveY = my * direction[1]

      console.log(moveY, direction, my, height)

      const newHeight = moveY + Y

      set.start({ height: moveY + Y })

      /* if (moveY > window.innerHeight / 3) {
        set.stop().start({ height: 700 })
      } else if (moveY <= window.innerHeight / 3) {
        set.stop().start({ height: Y })
      } */

      // const heightControl = movement[1] * -1

      /* set.start({
      height: heightControl,
    }) */
    }
  )

  return (
    <Container>
      <Content
        style={{
          height,
        }}
        {...bind()}
      >
        <header>
          <div className="drag-bar" />
        </header>
      </Content>
    </Container>
  )
}
