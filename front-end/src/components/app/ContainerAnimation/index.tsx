import { ReactNode } from 'react'
import { config, useSpring } from 'react-spring'

import { Container } from './styles'

interface ContainerAnimationProps {
  children: ReactNode
}

export default function ContainerAnimation({
  children,
  ...props
}: ContainerAnimationProps) {
  const styles = useSpring({
    to: { opacity: 1, scale: 1, translateY: 0 },
    from: { opacity: 0, scale: 0, translateY: -250 },
    config: config.gentle,
  })

  return (
    <Container style={styles} {...props}>
      {children}
    </Container>
  )
}
