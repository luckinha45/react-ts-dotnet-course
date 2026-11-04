import {useContext} from 'react';
import {ExContext} from '../contexts/ExContext'

export default function ValorCtx() {
  const {msg} = useContext(ExContext);


  return <p>
    Minha mensagem é: {msg}
  </p>
}