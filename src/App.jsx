
import { useState } from 'react'
import './App.css'
import CardAdicionar from './components/CardAdicionar'

function App() {

  const [listaTarefas, setListaTarefas] = useState([
    {textoTarefa: "Tarefa 1", finalizada: false},
  ])
  

  return (
    < >
      <CardAdicionar/>
    </>
  )
}

export default App
