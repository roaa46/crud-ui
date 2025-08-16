import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "../Product/product";

function ProductView() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const API_URL = "https://fakestoreapi.com/products/";
  useEffect(() => {
    fetch(`${API_URL}${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  return (
    <>
      <Product product={product} showButton={false} />
    </>
  );
}
export default ProductView;
