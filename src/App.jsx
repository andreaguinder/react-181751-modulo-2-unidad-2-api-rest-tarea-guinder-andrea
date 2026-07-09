
import './index.scss'
import { useState } from 'react'
import Usuarios from './components/Usuarios/Usuarios'
import Search from './components/Search/Search'

function App() {

  const [search, setSearch] = useState("")

  return (
    <>
      <Search onSearch={setSearch} />
      <Usuarios filtro={search} />
    </>
  )
}

export default App
