import { SpringValue } from 'react-spring'

import { Container } from './styles'

interface GenderProps {
  props: {
    display: SpringValue<string>
    x: SpringValue<number>
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bind: any
}

export default function Gender({ bind, props }: GenderProps) {
  return (
    <Container {...bind()} style={props}>
      olá
    </Container>
  )
}
