import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
      <nav>
          <div>
              <NavLink to="/catalog">Каталог</NavLink>
              <NavLink to="/favourites">Избранное</NavLink>
          </div>
      </nav>
    );
};

export default Navbar;