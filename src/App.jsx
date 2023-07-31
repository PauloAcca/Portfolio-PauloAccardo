import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./redux/userSlice";
import "./App.css";
// Componentes
import { Header } from "./components/header";
import { Email } from "./components/email";
import { NavegationBar } from "./components/navegationBar";
import { MainTitle } from "./components/mainTitle";
// Cierro componentes
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


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
      <NavegationBar />
      <MainTitle />
    </div>
  );
}

export default App;
