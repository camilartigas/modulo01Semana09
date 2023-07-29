import {useState} from 'react'
function CardAdicionar(){

  //o useState tem duas variáveis, a primeira é o valor da variável e a segunda é a função que altera o valor da variável, tendo um jeito de guardar o texto da tarefa
  const [textoTarefa, setTextoTarefa] = useState(" ")
  return (
    <div>
      {/* <h1>Texto da tarefa: {textoTarefa}</h1> */}
      <input type="text" value={textoTarefa} onChange={ (evento) => setTextoTarefa(evento.target.value)} placeholder="Digite sua tarefa"/>
      <button onClick={()=>{}}>Adicionar</button>
    </div>
    
  )
}

export default CardAdicionar