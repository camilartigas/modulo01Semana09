import {useState} from 'react'
function CardAdicionar(props){

  //o useState tem duas variáveis, a primeira é o valor da variável e a segunda é a função que altera o valor da variável, tendo um jeito de guardar o texto da tarefa
  const [textoTarefa, setTextoTarefa] = useState(" ")

  const handleAdicionarTarefa = () => {
    props.adicionarTarefa(textoTarefa)
    setTextoTarefa("") //limpa o input
  }
  return (
    <div>
      <input type="text" value={textoTarefa} onChange={(evento) => setTextoTarefa(evento.target.value)} placeholder='Digite uma tarefa'/>
      <button onClick={() => handleAdicionarTarefa()}>Adicionar</button>
    </div>
    
  )
}

export default CardAdicionar