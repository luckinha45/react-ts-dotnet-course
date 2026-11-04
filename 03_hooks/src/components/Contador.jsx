import {useReducer, useState} from 'react'

const estadoInicial = { contador: 0, color:'red' };
function reducer(estado, acao) {
  switch(acao.tipo) {
    case "incr":
      return { ...estado, contador: estado.contador+acao.valor };

    case "decr":
      return { ...estado, contador: estado.contador-acao.valor };

    case "color":
      return { ...estado, color: acao.valor };
     
    default:
      throw new Error(`Contador.jsx - acao ${acao.tipo} desconhecida!`);
  }
}

export default function Contador() {
  const [estado, dispatch] = useReducer(reducer, estadoInicial);
  const [inptAmount, setInptAmount] = useState(0);
  const [inptColor, setInptColor] = useState("");

  return <div>

    <div style={{backgroundColor: estado.color}}>
      Contador: {estado.contador}
    </div>
    
    <div>
      <label>N:</label>
      <input value={inptAmount} onChange={(e) => setInptAmount(e.target.value)} />
    </div>
    <div>
      <label>Cor:</label>
      <input value={inptColor} onChange={(e) => setInptColor(e.target.value)} />
    </div>

    <div>
      <button onClick={(e) => dispatch({tipo: "incr", valor: Number(inptAmount)})}>Soma</button>
      <button onClick={(e) => dispatch({tipo: "decr", valor: Number(inptAmount)})}>subtrai</button>
      <button onClick={(e) => dispatch({tipo: "color", valor: inptColor})}>Muda cor</button>
    </div>
  </div>
}