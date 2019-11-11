import Products from '../components/Products.js'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
      <Products products={props.products}/>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://my-json-server.typicode.com/mood-board/demo/products');
  const data = await res.json();
  return {
    products: data
  };
};
export default Index