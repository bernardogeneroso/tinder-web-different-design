import { useRef, createElement, useState } from 'react'
import { useSprings } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import clamp from 'lodash.clamp'

import Menu from '../Menu'
import Profile from '../Profile'
// import Gender from '../Gender'

import { Container, Structure } from './styles'

const pages = [
  {
    name: 'Profile',
    component: Profile,
  },
  {
    name: 'Gender',
    component: Profile,
  },
  {
    name: 'Interests',
    component: Profile,
  },
]

export default function AboutYou() {
  const index = useRef(0)
  const [page, setPage] = useState(0)
  const [pagesAboutYou, api] = useSprings(
    pages.length,
    (i) => ({
      x: i * window.innerWidth,
      display: 'block',
    }),
    []
  )
  const bind = useDrag(
    ({ active, movement: [mx], direction: [xDir], distance, cancel }) => {
      if (active && distance > window.innerWidth / 2) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        index.current = clamp(
          index.current + (xDir > 0 ? -1 : 1),
          0,
          pages.length - 1
        )
        cancel()
      }

      api.start((i) => {
        if (i < index.current || i > index.current) return { display: 'none' }

        const x = (i - index.current) * window.innerWidth + (active ? mx : 0)

        if (active) setPage(index.current)

        return { x, display: 'block' }
      })
    }
  )

  return (
    <Container>
      <Menu
        menuOption={
          page === 0 ? 'Profile' : page === 1 ? 'Gender' : 'Interests'
        }
      />

      <Structure>
        {pagesAboutYou.map((props, i) => {
          return createElement(pages[i].component, { key: i, props, bind })
        })}
      </Structure>
    </Container>
  )
}