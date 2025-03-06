import { useState, useRef } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/formulario";
import ReposList from "./components/ReposList";

function App() {


  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);

  const inputRef = useRef(null);
  const [nomeUsuario, setNomeUsuario] = useState("");

  const clickButton = () => {
    setNomeUsuario(inputRef.current.value); // Captura o valor do input ao clicar no botão
  };

  return(

    <div>

      <div class="search">
          <input type="text" ref={inputRef} placeholder="Procure um usuário" />
          <button type="button" onClick={clickButton}>Procurar</button>
      </div>     
      

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario}/>        
        </>      
      )}
      
      {/* {formularioEstaVisivel && (
        <Formulario />
      )}

      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">
        toggle form
      </button> */}
    </div>
  )
}

export default App
