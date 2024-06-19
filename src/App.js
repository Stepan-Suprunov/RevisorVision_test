import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Catalog from "./components/Catalog/Catalog";
import Favourites from "./components/Favourites/Favourites";

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Navbar/>
          <div className='app-wrapper-content'>
            <Routes>
                <Route path="/catalog/*" element={<Catalog/>} />
                <Route path="/favourites/*" element={<Favourites/>} />
            </Routes>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
