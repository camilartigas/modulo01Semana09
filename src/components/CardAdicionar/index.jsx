import {useState} from 'react'
function CardAdicionar(props){

  //o useState tem duas variáveis, a primeira é o valor da variável e a segunda é a função que altera o valor da variável, tendo um jeito de guardar o texto da tarefa
  const [textoTarefa, setTextoTarefa] = useState(" ")
  return (
    <div>
      <input type="text" value={textoTarefa} onChange={ (evento) => setTextoTarefa(evento.target.value)} placeholder="Digite sua tarefa"/>
      <button onClick={()=> props.adicionarTarefa(textoTarefa)}>Adicionar</button>
    </div>
    
  )
}

export default CardAdicionar