import styled from "styled-components"

const OptionsContainer = styled.ul`
  display: flex;
`

const Option = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  font-size: 16px;
  min-width: 120px;
`


const textoOption = ['Categorias', 'Estante', 'Favoritos']

function OpcoesHeader () {
    return (
        <OptionsContainer>
        {textoOption.map ( (texto) => (
          <Option className='Option'>{texto}</Option>
        ) ) }
    </OptionsContainer>
    )
}

export default OpcoesHeader