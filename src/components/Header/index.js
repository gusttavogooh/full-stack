import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import OpcoesIcons from '../OpcoesIcons'

import './style.css'

function Header() {
return (
    <header className="App-header">
      <Logo />
      <OpcoesHeader />
      <OpcoesIcons />
    </header>
  )
}

export default Header