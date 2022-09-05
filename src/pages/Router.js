import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './HomePage'
import Pokedex from './PokedexPage'
import Detalhes from './DetailsPage'

function Router() {
    return (

        <BrowserRouter>

            <Routes>
                <Route index element={<Home/>} />
                <Route path="/pokedex" element={<Pokedex/>} />
                <Route path="/detalhes" element={<Detalhes/>} />
            </Routes>
        
        </BrowserRouter>

    );
  }
  
  export default Router;