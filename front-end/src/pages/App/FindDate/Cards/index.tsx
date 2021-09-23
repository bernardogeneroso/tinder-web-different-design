/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import { useSprings } from 'react-spring'
import { useDrag } from '@use-gesture/react'

import Card from './Card'

import { Container } from './styles'

const cards = [
  'https://upload.wikimedia.org/wikipedia/en/f/f5/RWS_Tarot_08_Strength.jpg',
  'https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg',
  'https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg',
  'https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg',
  'https://upload.wikimedia.org/wikipedia/en/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg',
  'https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg',
]

const to = (i: number) => ({
  x: 0,
  y: i * 8,
  scale: 1,
  rot: 0,
  delay: i * 100,
})
const from = (i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })

export default function Cards() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [gone] = useState<any>(() => new Set()) // The set flags all the cards that are flicked out
  const [props, set] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  }))

  const bind = useDrag(
    ({
      active,
      args: [index],
      direction: [xDir],
      movement: [mx, my],
      distance: [dx, dy],
      down,
      velocity,
    }) => {
      const trigger = velocity[0] > 0.2
      const dir = xDir < 0 ? -1 : 1

      if (!down && trigger) gone.add(index)

      set.start((i) => {
        if (index !== i) return

        console.log(window.innerWidth, window.innerHeight)

        const isGone = gone.has(index)
        const x = isGone ? (mx + window.innerWidth) * dir : down ? mx : 0
        const y = isGone ? my : down ? my : i * 8

        const rot = down ? mx / 100 + (isGone ? dir * 10 * velocity[0] : 0) : 0
        const scale = down ? 1.1 : 1

        return {
          x,
          y,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        }
      })

      if (!down && gone.size === cards.length)
        setTimeout(() => gone.clear() || set((i) => to(i)), 600)
    }
  )

  return (
    <Container>
      {props.map((styles, i) => (
        <Card key={i} bind={bind} index={i} style={styles} />
      ))}
    </Container>
  )
}
