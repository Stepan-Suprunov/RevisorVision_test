import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/catalogPage/Users/UsersContainer";
import FavouritesContainer from "./components/favouritesPage/FavouritesContainer";

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Navbar/>
          <div className='app-wrapper-content'>
            <Routes>
                <Route path="/catalog/*" element={<UsersContainer/>} />
                <Route path="/favourites/*" element={<FavouritesContainer/>} />
            </Routes>
          </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
