import { useEffect } from "react";


export default function SyncUser({user}) {
  useEffect(() => {
    document.title = user.name
  }, [user]);
  
  return <div>
    <h3>{user.name}</h3>
    <p>Age: {user.age}</p>
    <p>Height: {user.height}</p>
  </div>
}