import "./productList.css"
import Product from "../product/Product"
import {products} from "../../data"

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title"> Some of my projects</h1>
        <p className="pl-desc">{/* optional text here */}</p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product
            key={item.id}
            img={item.img}
            link={item.link}
            projectName={item.projectName}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList