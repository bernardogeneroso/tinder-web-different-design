import { SpringValue } from 'react-spring'
import { HiOutlineCamera } from 'react-icons/hi'

import Location from './Location'
import BirthdayDate from './BirthdayDate'
import InputAboutYou from '../../../components/auth/InputAboutYou'

import { Container, Header, Content, ContainerUserInformation } from './styles'

interface ProfileProps {
  props: {
    display: SpringValue<string>
    x: SpringValue<number>
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bind: any
}

export default function Profile({ props, bind }: ProfileProps) {
  return (
    <Container {...bind()} style={props}>
      <Header>
        <div className="container-image">
          <img src="https://eu.ui-avatars.com/api/?size=256" alt="Avatar" />

          <div className="camera">
            <HiOutlineCamera color="#fff" />
          </div>
        </div>
      </Header>
      <Content>
        <ContainerUserInformation>
          <InputAboutYou label="First name" />
          <InputAboutYou label="Last name" />

          <BirthdayDate />
        </ContainerUserInformation>

        <ContainerUserInformation>
          <InputAboutYou type="textarea" label="About" />

          <Location />
        </ContainerUserInformation>
      </Content>
    </Container>
  )
}
