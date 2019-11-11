
import React, { Component } from 'react';
import Product from './Product';

class Products extends Component {

  constructor(props) {
    super(props);
  }
 render() {
      return (
        <div>
          <div className="container mt-4">
            <div className="row">
               {this.props.products.map(item => <Product key={item.id} product={item} />)}
            </div>
          </div>
        </div>
      )
 }
};
export default Products;