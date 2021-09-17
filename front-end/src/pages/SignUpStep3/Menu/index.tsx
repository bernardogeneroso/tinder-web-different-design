import { useSpring, config, animated } from 'react-spring'

import { Container, Content } from './styles'

interface OptionProps {
  text: string
  isActive: boolean
  index: number
  handleSetPageAboutYou(pageOption: number): void
}

function Option({ text, isActive, index, handleSetPageAboutYou }: OptionProps) {
  const stylesTextIsActive = useSpring({
    color: isActive ? '#fe5166' : '#7A7878',
  })

  const [stylesText, apiText] = useSpring(() => ({
    from: { x: 0 },
  }))

  const [stylesLine, apiLine] = useSpring(() => ({
    from: {
      translateY: 0,
    },
  }))

  function handleClickContent() {
    apiText.start({
      to: [{ x: 1 }, { x: 0 }],
      config: config.gentle,
    })

    handleSetPageAboutYou(index)
  }

  function handleMouseEnter() {
    apiLine.start({
      to: { translateY: -4 },
      config: config.gentle,
    })
  }

  function handleMouseLeave() {
    apiLine.pause().start({
      translateY: 0,
      config: config.gentle,
    })

    apiLine.resume()
  }

  return (
    <Content
      isActive={isActive}
      onClick={handleClickContent}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <animated.div
        style={{
          scale: stylesText.x.to({
            range: [0, 0.35, 0.55, 0.6, 0.75, 0.85, 0.95, 1],
            output: [1, 0.8, 0.7, 0.65, 1.3, 1.1, 1.03, 1],
          }),
          ...stylesTextIsActive,
        }}
        className="text"
      >
        {text}
      </animated.div>

      <animated.div style={stylesLine} className="line" />
    </Content>
  )
}

interface MenuProps {
  menu: string[]
  menuOption: number
  handleSetPageAboutYou(pageOption: number): void
}

export default function Menu({
  menu,
  menuOption,
  handleSetPageAboutYou,
}: MenuProps) {
  return (
    <Container>
      {menu.map((option, i) => (
        <Option
          key={option}
          text={option}
          isActive={menuOption === i}
          index={i}
          handleSetPageAboutYou={handleSetPageAboutYou}
        />
      ))}
    </Container>
  )
}
