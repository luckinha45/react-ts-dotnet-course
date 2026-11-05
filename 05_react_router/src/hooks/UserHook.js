import { useEffect } from "react";
import { useState } from "react";

export default function UserHook() {
  const [user, setUser] = useState(localStorage.getItem("user") || "");

  // Salva o login
  useEffect(() => {
    function salvaLogin(e) {
      console.log(`${e.detail} logado!`);
      setUser(e.detail);
    }

    window.addEventListener('salvaLogin', salvaLogin);
    return () => window.removeEventListener('salvaLogin', salvaLogin);
  }, []);

  // Salva no LocalStorage qqr alteração no user
  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user]);

  return user;
}