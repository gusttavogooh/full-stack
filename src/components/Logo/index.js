import logo from "../../img/logo.svg"
import styled from "styled-components"

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`
const LogoImg = styled.img`
  margin-left: 10px;
  margin-right: 10px;
`

const Title = styled.p`

`

function Logo() {
  return (
    <LogoContainer>
      <LogoImg 
        src={logo} 
        alt="logo">
      </LogoImg>
      <Title>
        <strong>Alura</strong>Books
      </Title>
    </LogoContainer>
  );
}

export default Logo
