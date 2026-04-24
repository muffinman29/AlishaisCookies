import cookiemenu from '../assets/cookiemenu.jpeg';
import cupcackesandcakes from '../assets/cupcakesandcakesmenu.jpeg';
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <h2>Menu</h2>
      <p>We offer a variety of delicious cookies and cakes made with the finest ingredients.</p>
      
      <div style={{ paddingBottom: '70px' }}>
        <img src={cookiemenu} alt="Cookie Menu" className="img-fluid"/>
      </div>
      <div>
        <img src={cupcackesandcakes} alt="Cupcakes and Cakes Menu" className="img-fluid" />
      </div>
    </div>
  );
}

export default Menu;
