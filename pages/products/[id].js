
import fetch from 'isomorphic-unfetch';
import ProductItem from '../../components/ProductItem'

const Productitem = props => {
  return (
        <ProductItem product={props.product}/>
  )
};

Productitem.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://my-json-server.typicode.com/mood-board/demo/products/${id}`);
  const product = await res.json();
  return { product };
};
export default Productitem;