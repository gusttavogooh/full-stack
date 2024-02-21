import Perfil from '../../img/perfil.svg'
import Sacola from '../../img/sacola.svg'

import "./style.css"

const icons = [Perfil, Sacola]

function OpcoesIcons() {
    return (
        <ul className='Icons'>
            {icons.map((icons) => (
                <li className='Icon'><img src={icons}></img></li>
            ))}
        </ul>
    )
}

export default OpcoesIcons