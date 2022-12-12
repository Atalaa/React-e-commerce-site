import heart from "./heart.svg";
import "./Products.css";
import { Link } from "react-router-dom";
import inventory from "../../data/inventory";

export default function Products() {
  return (
    <div className="container-products">
      {inventory.map((item) => (
        <Link
          to={{
            pathname: `/products/${item.title.replace(/\s+/g, "").trim()}`,
          }}
          key={item.id}
        >
           <div className="bloc-card">
            <div className="product-card">
              <div className="visual-aspect">
                <img className="img-product"
                src={item} alt="" />
              </div>
            </div>
           </div>
        </Link>
      ))}
    </div>
  );
}
