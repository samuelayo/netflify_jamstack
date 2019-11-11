
import React from 'react';
import { useContext } from 'react';
import CartContext from './cartContext';

const Navbar = (props) => {
  const { cart } = useContext(CartContext);
  return (
    <nav className="navbar navbar-light bg-light">
      <h3><a href="/">Shoppr</a></h3>
      <a href="/cart" className="btn btn-outline-primary my-2 my-sm-0">Cart {cart.length}</a>
    </nav>
  );
};
export default Navbar;