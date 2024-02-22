import Input from "../Input"
import styled from "styled-components"
import { useState } from "react"
import { livros } from "./dadosPesquisar"

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`

const Title = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`

const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`

function Pesquisa() {
    const [ livrosPesquisados, setLivrosPesquisados ] = useState([])

    console.log(livrosPesquisados)

    return (
        <PesquisaContainer>
            <Title>Já sabe por onde começar?</Title>
            <Subtitle>Encontre seu livro em nossa estante.</Subtitle>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter( livro => livro.nome.includes(textoDigitado) )
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
        </PesquisaContainer>
    )
}

export default Pesquisa