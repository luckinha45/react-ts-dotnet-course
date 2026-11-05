import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

export const appRoutes = [
  { path: "/", element: <Home />, title: "Início" },
  { path: "/about", element: <About />, title: "Sobre" },
  { path: "/contact", element: <Contact />, title: "Contato" },
  
  { path: "/login", element: <Login />, title: "" },
  { path: "*", element: <NotFound />, title: "" },
];