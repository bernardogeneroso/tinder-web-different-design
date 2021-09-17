import { useRef, createElement, useCallback, useState } from 'react'
import { useSprings } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import clamp from 'lodash.clamp'

import Menu from '../Menu'
import Profile from '../Profile'
import Gender from '../Gender'

import { Container, Structure } from './styles'

const pages = [
  {
    name: 'Profile',
    component: Profile,
  },
  {
    name: 'Gender',
    component: Gender,
  },
  {
    name: 'Interests',
    component: Profile,
  },
]

const pagesNames = pages.map((page) => page.name)

export default function AboutYou() {
  const index = useRef(0)
  const [page, setPage] = useState(0)
  const [pagesAboutYou, api] = useSprings(
    pages.length,
    (i) => ({
      x: i * window.innerWidth,
      display: i === 0 ? 'block' : 'none',
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

  const handleSetPageAboutYou = useCallback(
    (pageOption: number) => {
      api.start((i) => {
        if (pageOption < i || pageOption > i) {
          const x = window.innerWidth

          if (pageOption < i) {
            return { x: x / 2, display: 'none' }
          }
          if (pageOption > i) {
            return { x: -(x / 2), display: 'none' }
          }

          return { display: 'none' }
        }

        index.current = i
        setPage(i)

        return { x: 0, display: 'block' }
      })
    },
    [api]
  )

  return (
    <Container>
      <Menu
        menu={pagesNames}
        menuOption={page}
        handleSetPageAboutYou={handleSetPageAboutYou}
      />

      <Structure>
        {pagesAboutYou.map((style, i) => {
          return createElement(pages[i].component, { key: i, style, bind })
        })}
      </Structure>
    </Container>
  )
}
