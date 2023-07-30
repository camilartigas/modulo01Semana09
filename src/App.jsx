
import { useState } from 'react'
import './App.css'
import CardAdicionar from './components/cardAdicionar'

function App() {

  const [listaTarefas, setListaTarefas] = useState([])

  const adicionarTarefa = (texto) => {
    if(!texto) {
      alert("Digite uma tarefa")
      return
    }
    const novaTarefa = {id: listaTarefas.length +1, textoTarefa: texto, finalizada: false}

    setListaTarefas([...listaTarefas, novaTarefa])
  }
  

  return (
    <>
      <CardAdicionar adicionarTarefa={adicionarTarefa}/>
      <div>{listaTarefas.map(tarefa => (<span>{tarefa.textoTarefa}</span>))}</div>
    </>
  )
}

export default App
