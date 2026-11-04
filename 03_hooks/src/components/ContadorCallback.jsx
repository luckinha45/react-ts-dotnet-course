import React, { Children, useState, useCallback } from "react";

// memo = components
// useMemo = valores
const Botao = React.memo(({onClick, children}) => {
  return <button onClick={onClick}>{children}</button>
})

export default function ContadorCallback() {
  const [contador, setContador] = useState(0);

  const incrementar = useCallback(() => {
    setContador(prev => prev+1);
  }, [])
  
  return <div>
    <p>Contagem: {contador}</p>
    <Botao onClick={incrementar}> Incrementar </Botao>
  </div>
}