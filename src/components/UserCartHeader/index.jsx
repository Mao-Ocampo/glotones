import CarritoCompras from "../../assets/img/icons/shopping-cart.svg";
import MagnifyingGlass from "../../assets/img/icons/magnifying-glass.svg";
import Star from "../../assets/img/icons/estrella.svg";

import "./userCartHeader.css";

export const UserCartHeader = () => {
  return (
    <section>
      <h1>Hola Mauricio</h1>
      <div className="header-navbar-icons">
        <img src={CarritoCompras} alt="Carrito de compras" />
        <img src={MagnifyingGlass} alt="Buscar" />
      </div>
      <section className="header-navbar-level">
        <div>
          <p>Mi Nivel</p>
        </div>
        <div class="header-navbar-level-icons">
          <img class="star-white" src={Star} alt="Estrella 1" />
          <img class="star-white" src={Star} alt="Estrella 2" />
          <img class="star-white" src={Star} alt="Estrella 3" />
          <img src={Star} alt="Estrella 4" />
          <img src={Star} alt="Estrella 5" />
        </div>
      </section>
    </section>
  );
};
