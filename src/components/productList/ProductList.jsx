import "./productList.css"
import Product from "../product/Product"
import {products} from "../../data"

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title"> Some of my projects</h1>
        <p className="pl-desc">
          Nob is a creative portfolio that your work has been waiting. Beautiful homes, sunning portfolio styles & a whole lot more.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>


    </div>
  );
};

export default ProductList