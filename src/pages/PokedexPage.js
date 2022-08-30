import React from 'react'
import { useNavigate } from 'react-router-dom';

function Pokedex() {

  //navegação
  const navigate = useNavigate()

  const voltarHome = () => {

    navigate(-1)

  }

  const verDetalhes = () => {

    navigate("/detalhes")

  }
  //fim navegação

    return (
      <div>
        <p>MINHA POKEDEX</p>
        <button onClick={voltarHome}>Escolha mais pokemons</button>
        <button onClick={verDetalhes}>Ver Detalhes</button>
      </div>
    );
  }
  
  export default Pokedex;