import './App.css'
import ItemListContainer from './assets/components/ItemListContainer'
import NavBar from './assets/components/NavBar'
export function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting ="Hola" />
    </>
  )
}

export default App
