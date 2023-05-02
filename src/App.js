import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import NomeUsuario from "./pages/tarefa/NomeUsuario";

function App() {
  return (
    <div className="App">
      <Header />
      <NomeUsuario />
      <ListarTarefa />
    </div>
  );
}

export default App;
