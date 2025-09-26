import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'

import { Description, Button, SidebarContainer } from './styles'

type Props = {
  toggleTheme: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>João Vitor Algayer Barbosa</Title>
      <Paragraph type="secondary" fontSize={16}>
        algayer-code
      </Paragraph>
      <Description type="principal" fontSize={12}>
        Engenherio Full Stack
      </Description>
      <Button onClick={props.toggleTheme}>Trocar tema</Button>
    </SidebarContainer>
  </aside>
)

export default Sidebar
