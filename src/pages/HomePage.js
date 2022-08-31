import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {

  //navegação
  const navigate = useNavigate()

  const verPokedex = () => {

    navigate("/pokedex")

  }

  const verDetalhes = () => {

    navigate("/detalhes")

  }
  //fim navegação

    return (
      <div>
        <p>Escolha seu pokemon:</p>
        <button onClick={verPokedex}>Pokedex</button>
        <button onClick={verDetalhes}>Ver Detalhes</button>
      </div>
    );
  }
  
  export default Home;