import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Favourites from "./components/favouritesPage/Favourites";
import UsersContainer from "./components/catalogPage/Users/UsersContainer";

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Navbar/>
          <div className='app-wrapper-content'>
            <Routes>
                <Route path="/catalog/*" element={<UsersContainer/>} />
                <Route path="/favourites/*" element={<Favourites/>} />
            </Routes>
          </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
