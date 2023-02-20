import Navbar from "./Navbar";

let styles = { color: "pink", background: "blue" };
const App = () => {
  let nombre = "Pepito";
  // let saludar = `Hola ${nombre}`;
  // let edad = 30;
  let sumar = () => {
    return 2 + 2;
  };

  return (
    <div className="App">
      <Navbar/>
      <h1 style={styles}>Hola {nombre} como estás?</h1>
      <h2>{sumar()}</h2>
      <h3>{nombre === "Juan" ? "Hola" : "Chau"}</h3>
    </div>
  );
};

export default App;
