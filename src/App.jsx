
import { useState } from 'react'
import './App.css'
import CardAdicionar from './components/cardAdicionar'
import ListItem from './components/ListItem'

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
  
  const removerTarefa = (id) => {
    const novaLista = listaTarefas.filter(item => item.id != id)
    setListaTarefas(novaLista)
  }


  return (
    <>
      <CardAdicionar adicionarTarefa={adicionarTarefa}/>
      <div>{listaTarefas.map(tarefa => (<ListItem key={tarefa.id} id={tarefa.id} removerTarefa={removerTarefa} textoTarefa={tarefa.textoTarefa} finalizada={tarefa.finalizada} />))}</div>
    </>
  )
}

export default App
