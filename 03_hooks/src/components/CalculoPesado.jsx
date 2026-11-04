import { useMemo } from "react";

export default function CalculoPesado({numero}) {
    const resultPesado = useMemo(() => {
      return opPesado(numero);
    }, [numero])

  return <div>
    Resultado: {resultPesado}
  </div>
}

function opPesado(num) {
  console.log("calc pesado")
  return num*1000;
}