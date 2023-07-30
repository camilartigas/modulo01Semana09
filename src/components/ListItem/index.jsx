import { useState } from "react"
import './style.css'

function ListItem(props) {

  const [finalizada, setFinalizada] = useState(props.finalizada)

  return (
    <div className="list-item">
      
      <input type="checkbox" checked={finalizada} />
      <h3 className={finalizada && 'marca-finalizado'}>{props.textoTarefa}</h3>
      <button onClick={()=>setFinalizada(!finalizada)}>Finalizar</button>
    </div>
  )
}

export default ListItem