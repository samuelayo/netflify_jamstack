
import Link from "next/link";

const Product = (props) => {
 return (
      <div className="col-sm-4">
          <div className="card" style={{width: "18rem"}}>
            <img src={props.product.image} className="card-img-top" alt="shirt"/>
            <div className="card-body">
              <h5 className="card-title">{props.product.name}</h5>
              <h6 className="card-title">$ {props.product.price}</h6>
              <Link href="/products/[id]" as={`/products/${props.product.id}`}>
                  <a>View Item &rarr;</a>
              </Link>
            </div>
          </div>
      </div>
 );
}
export default Product;