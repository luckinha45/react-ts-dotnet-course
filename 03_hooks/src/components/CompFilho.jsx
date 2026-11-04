import {useContext} from 'react'
import { ExContext } from '../contexts/ExContext';



export default function CompFilho() {
  const {msg, setMsg} = useContext(ExContext);

  return <div>
    <input value={msg} onChange={(e) => setMsg(e.target.value)}/>
  </div>
}