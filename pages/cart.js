
import { useContext } from 'react';
import CartContext from '../components/cartContext';

const Cart = () => {
   const { cart, carttotal } = useContext(CartContext);
   return(
     <div>
      <h3 >Cart Items</h3>
      <div className="pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" className="border-0 bg-light">
                        <div className="p-2 px-3 text-uppercase">Product</div>
                      </th>
                      <th scope="col" className="border-0 bg-light">
                        <div className="py-2 text-uppercase">Price</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map(item =>
                    <tr>
                      <th scope="row" className="border-0">
                        <div className="p-2">
                          <img src={item.image} alt="product" width="70" className="img-fluid rounded shadow-sm"/>
                          <div className="ml-3 d-inline-block align-middle">
                          <h5 className="mb-0"> <a href="#" className="text-dark d-inline-block align-middle">{item.description}</a></h5>
                          </div>
                        </div>
                      </th>
                      <td className="border-0 align-middle"><strong>$ {item.price}</strong></td>
                    </tr>
                    )}
                  </tbody>
                </table>
              </div>
             <ul className="list-unstyled mb-4">
                <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
                  <h5 className="font-weight-bold">$ {carttotal}</h5>
                </li>
              </ul>
              <a href="#" className="btn btn-dark rounded-pill py-2 btn-block">Procceed to checkout</a>
            </div>
          </div>
        </div>
      </div>
     </div>
   )
}
export default Cart;