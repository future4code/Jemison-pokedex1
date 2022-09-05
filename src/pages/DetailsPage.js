import React from 'react'
import { useNavigate } from 'react-router-dom';

function Detalhes() {

  //navegação
  const navigate = useNavigate()

  const voltarPag = () => {

    navigate(-1)

  }

  //fim navegação

    return (
      <div>
        <p>DETALHES DO POKEMON</p>
        <button onClick={voltarPag}>Voltar</button>
      </div>
    );
  }
  
  export default Detalhes;