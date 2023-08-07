import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./redux/userSlice";
import "./App.css";
// Componentes
import { Header } from "./components/header";
import { Email } from "./components/email";
import { NavegationBar } from "./components/navegationBar";
import { MainTitle } from "./components/mainTitle";
import { AboutMe } from "./components/aboutMe";
import { Portfolio } from "./components/portfolio";
import { Skills } from "./components/skills";
import { Educacion } from "./components/educacion";
import { Contacto } from "./components/contacto";
// Cierro componentes
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => dispatch(addUser(data)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavegationBar />
        <Routes>
          <Route exact path="/"  Component={MainTitle}/>
          <Route path="/sobreMi"  Component={AboutMe}/>
          <Route path="/portfolio"  Component={Portfolio}/>
          <Route path="/skills"  Component={Skills}/>
          <Route path="/educacion"  Component={Educacion}/>
          <Route path="/contacto"  Component={Contacto}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
