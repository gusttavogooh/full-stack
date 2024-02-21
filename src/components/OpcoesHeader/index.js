import "./style.css"

const textoOption = ['Categorias', 'Estante', 'Favoritos']

function OpcoesHeader () {
    return (
        <ul className='Options'>
        {textoOption.map ( (texto) => (
          <li className='Option'>{texto}</li>
        ) ) }
    </ul>
    )
}

export default OpcoesHeader