
import Link from "next/link";
import { useContext } from 'react';
import CartContext from './cartContext';

const ProductItem = (props) => {
  const { addToCart, total } = useContext(CartContext);
   return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-sm-4">
            <div className="card" style={{width: "18rem"}}>
            <img src={props.product.image} className="card-img-top" alt="shirt"/>
            </div>
          </div>
          <div className="col-sm-4 ">
              <div className="card-body" style={{marginTop: "135px"}}>
                <h5 className="card-title">{props.product.name}</h5>
                <h6 className="card-title">$ {props.product.price}</h6>
                <p>{props.product.description}</p>
                <button className="btn btn-large btn-primary" onClick={() => {addToCart(props.product); total(props.product.price); }}>Add to Cart
                </button>
              </div>
          </div>
          </div>
      </div>
   );
}
export default ProductItem;