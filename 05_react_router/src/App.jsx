import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import style from './App.module.css'
import { appRoutes } from './AppRoutes';
import UserHook from './hooks/UserHook';
import { useState } from 'react';
import { useEffect } from 'react';

export default function App() {
  const user = UserHook();
  const [activePage, setActivePage] = useState("/");
  const navigate = useNavigate();
  // se usuario é vazaio e o sistema acessa outra pagina, redireciona para login
  useEffect(() => {
    if (user === "" && activePage !== "/login"){
      navigate("/login");
    }
  }, [activePage]);

  
  
  function handleNavLnk(e) {
    setActivePage(e.currentTarget.getAttribute("href"));
  }

  return <div className={style.container}>
  <nav className={style.navBar}>
    {appRoutes.map(r => r.title === "" ? "" : <span>
      <NavLink
        className={({isActive}) => (isActive ? style.isActive : "")}
        to={r.path}
        onClick={handleNavLnk}
      >
        {r.title}
      </NavLink>
    </span>)}
  </nav>

  <Routes>
    {appRoutes.map(r => <Route path={r.path} element={r.element} />)}
  </Routes>
  </div>
}
