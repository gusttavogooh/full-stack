import Header from './components/Header'
import styled from 'styled-components'

const AppContiner = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
`

function App() {
  return (
    <AppContiner>
      <Header />
    </AppContiner>
  );
}

export default App
