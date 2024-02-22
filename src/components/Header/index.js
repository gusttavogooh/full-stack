import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import OpcoesIcons from '../OpcoesIcons'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
`

function Header() {
return (
    <HeaderContainer>
      <Logo />
      <OpcoesHeader />
      <OpcoesIcons />
    </HeaderContainer>
  )
}

export default Header