import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductForm() {
    const API_URL = "https://fakestoreapi.com/products";
    const { productId } = useParams();
    const [form, setForm] = useState({
        title: "",
        price: 0.0,
        description: "",
        category: "",
        image: ""
    });

    // edit mode
    useEffect(() => {
        const fetchProduct = async () => {
            if (productId) {
            try {
                const res = await axios.get(`${API_URL}/${productId}`);
                setForm(res.data);
            } catch (err) {
                console.error("Error fetching product:", err);
            }
            }
        };

        fetchProduct();
    }, [productId]);
    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (productId) {
            // edit mode
            try {
                await axios.put(`${API_URL}/${productId}`, form);
                // console.log("success");
                window.location.pathname="/products"
                
            }
            catch(err) {
                console.log(err);
            }
        } else {
            // add mode
            try {
                await axios.post(`${API_URL}`, form);
                // console.log("success");
                window.location.pathname="/products"
                
            }
            catch(err) {
                console.log(err);
            }
        }
    }

    return (
        <div className="container">
            <h2>{productId ? "Edit Product" : "Add Product"}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        type="text"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        placeholder="Enter product title..."
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={form.price}
                        onChange={handleChange}
                        placeholder="Enter product price..."
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="description">Description</label>
                    <textarea
                        name="description"
                        id="description"
                        value={form.description}
                        onChange={handleChange}
                        placeholder="Enter product description..."
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="category">Category</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        placeholder="Enter product category..."
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="image">Image URL</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={form.image}
                        onChange={handleChange}
                        placeholder="Enter image URL..."
                        className="form-control"
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    {productId ? "Update Product" : "Add Product"}
                </button>
            </form>
        </div>
    );
}

export default ProductForm;
