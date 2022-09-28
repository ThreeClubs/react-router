import { useParams } from "react-router-dom";

function Product() {

const params = useParams()

  return ( 
    <div className="Product">
      <h1>Product</h1>
      <h3>The meaning of life is: {params.productID}</h3>
    </div>
  );
}

export default Product;
