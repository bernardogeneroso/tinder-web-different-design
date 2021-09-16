import { animated, useSpring } from 'react-spring'
import { FiChevronLeft } from 'react-icons/fi'

interface ChevronAnimationProps {
  modal: boolean
}

export default function ChevronAnimation({ modal }: ChevronAnimationProps) {
  const styles = useSpring({
    rotate: modal ? -90 : 0,
  })

  return (
    <animated.div style={styles}>
      <FiChevronLeft size={20} />
    </animated.div>
  )
}
