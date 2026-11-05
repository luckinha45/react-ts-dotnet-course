import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [usrName, setUsrName] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    window.dispatchEvent(new CustomEvent("salvaLogin", {detail: usrName, cancelable: true}));

    navigate("/");
  }

  return <>
    <h1>Login</h1>
    <form onSubmit={handleLogin}>
      <input value={usrName} onChange={(e) => setUsrName(e.target.value)} />
      <button type="submit">Logar</button>
    </form>
  </>
}