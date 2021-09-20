import { useCallback, useState } from 'react'
import { ReactSVG } from 'react-svg'
import { IconType } from 'react-icons'
import { useSpring } from 'react-spring'
import { FiCamera, FiShoppingBag, FiMic } from 'react-icons/fi'
import { BiTennisBall, BiRun, BiSwim } from 'react-icons/bi'

import YogaIcon from '../../../../../assets/interests/yoga.svg'
import CookingIcon from '../../../../../assets/interests/cooking.svg'
import ArtIcon from '../../../../../assets/interests/art.svg'
import TravelIcon from '../../../../../assets/interests/travel.svg'
import ParachuteIcon from '../../../../../assets/interests/parachute.svg'
import MusicIcon from '../../../../../assets/interests/music.svg'
import DrinkIcon from '../../../../../assets/interests/drink.svg'
import GamesIcon from '../../../../../assets/interests/games.svg'

import { Container, ContentInterest } from './styles'

interface IInterest {
  icon: IconType | string
  text: string
}

const listInterests: IInterest[] = [
  {
    icon: FiCamera,
    text: 'Photography',
  },
  {
    icon: FiShoppingBag,
    text: 'Shopping',
  },
  {
    icon: FiMic,
    text: 'Karaoke',
  },
  {
    icon: YogaIcon,
    text: 'Yoga',
  },
  {
    icon: CookingIcon,
    text: 'Cooking',
  },
  {
    icon: BiTennisBall,
    text: 'Tennis',
  },
  {
    icon: BiRun,
    text: 'Run',
  },
  {
    icon: BiSwim,
    text: 'Swimming',
  },
  {
    icon: ArtIcon,
    text: 'Art',
  },
  {
    icon: TravelIcon,
    text: 'Traveling',
  },
  {
    icon: ParachuteIcon,
    text: 'Extreme',
  },
  {
    icon: MusicIcon,
    text: 'Music',
  },
  {
    icon: DrinkIcon,
    text: 'Drink',
  },
  {
    icon: GamesIcon,
    text: 'Video games',
  },
]

interface InterestProps {
  icon: IconType | string
  text: string
  isActive: boolean
  handleToggleInterest(interest: string): void
}

function Interest({
  icon: Icon,
  text,
  isActive,
  handleToggleInterest,
}: InterestProps) {
  const styles = useSpring({
    backgroundColor: !isActive ? '#fff' : '#e94057',
    color: isActive ? '#fff' : '#000',
  })

  const iconComponent =
    typeof Icon === 'string' ? (
      <ReactSVG
        src={Icon}
        width={20}
        height={20}
        fill={isActive ? '#fff' : '#e94057'}
        wrapper="svg"
      />
    ) : (
      <Icon color={isActive ? '#fff' : '#e94057'} />
    )

  return (
    <ContentInterest style={styles} onClick={() => handleToggleInterest(text)}>
      {iconComponent}
      {text}
    </ContentInterest>
  )
}

export default function SelectInterests() {
  const [interestsSelected, setInterestsSelected] = useState<
    string[] | undefined
  >(undefined)

  const handleToggleInterest = useCallback(
    (interest) => {
      const interests = interestsSelected ? [...interestsSelected] : undefined

      if (interests && interests.includes(interest)) {
        setInterestsSelected(
          interests.filter((interestFilter) => interestFilter !== interest)
        )

        return
      }

      if (interests && interests.length >= 5) return

      if (!interests) {
        setInterestsSelected([interest])

        return
      }

      interests.push(interest)

      setInterestsSelected(interests)
    },
    [interestsSelected]
  )

  return (
    <Container>
      {listInterests.map(({ icon, text }) => (
        <Interest
          key={text}
          icon={icon}
          text={text}
          isActive={!!interestsSelected?.includes(text)}
          handleToggleInterest={handleToggleInterest}
        />
      ))}
    </Container>
  )
}
