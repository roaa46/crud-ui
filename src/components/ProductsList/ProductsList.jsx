import { useEffect, useState } from "react";
import Product from './../Product/product';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import './ProductList.css';

function ProductList() {
    const API_URL = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);
    useEffect(() => {
    const fetchProducts = async () => {
        try {
            const res = await axios.get(API_URL);
            setProducts(res.data);
        } catch (err) {
            console.error("Error fetching products:", err);
        }
    };

    fetchProducts();
}, []);


    const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

    return(
        <>
        <h1 className="head">Manage Your Products</h1>
        <Button className="btn-styl" as={Link} to="/add-product" variant="success" size="sm">Add Product</Button>
        <div className="container">
            <div className="row">
                {
                    products.map((product) => {
                        return(
                            <div className="col-3" key={product.id}>
                                <Product product = {product} showButton={true} onDelete={handleDelete}/>
                            </div>
                        )
                    })
                }
            </div>

        </div>
        </>
    );

}

export default ProductList;