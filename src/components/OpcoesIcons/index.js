/* eslint-disable jsx-a11y/alt-text */
import styled from 'styled-components'
import Perfil from '../../img/perfil.svg'
import Sacola from '../../img/sacola.svg'


const Icons = styled.li`
    margin-right: 40px;
    width: 25px;
`

const IconsContainer = styled.ul`
    display: flex;
    align-items: center;
    cursor: pointer;
`

const icons = [Perfil, Sacola]

function OpcoesIcons() {
    return (
        <IconsContainer>
            {icons.map((icons) => (
                <Icons className='Icon'><img src={icons}></img></Icons>
            ))}
        </IconsContainer>
    )
}

export default OpcoesIcons