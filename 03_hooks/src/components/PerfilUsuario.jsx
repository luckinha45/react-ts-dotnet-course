import { useEffect, useState } from 'react'

export default function PerfilUsuario({usuarioId}) {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const buscaUsuario = async() => {
      const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${usuarioId}`)

      const dados = await resp.json();
      setUsuario(dados);
    };

    if(usuarioId)
      buscaUsuario();
  }, [usuarioId]);

  return <div>
    {usuario ? (
      <div>
        <h1>{usuario.name}</h1> 
        <p>{usuario.email}</p> 
      </div>)
    : (
      <p>Carregando usuario...</p>)}
  </div>
}