import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Product.css";

function Product(props) {
  const { product, showButton, onDelete } = props;
  const API_URL = "https://fakestoreapi.com/products/";

  const handleDelete = async () => {
    if (window.confirm(`Are you sure you want to delete "${product.title}"?`)) {
      try {
        await axios.delete(`${API_URL}${product.id}`);
        if (onDelete) 
          onDelete(product.id);
      } catch (err) {
        console.error("Error deleting product:", err);
      }
    }
  };

  return (
    <Card className="product-card">
      <Card.Img
        className="product-image"
        variant="top"
        src={product.image}
        alt={product.title}
      />
      <Card.Body className="product-body">
        <Card.Title className="product-title">{product.title}</Card.Title>
        <Card.Text className="product-description">
          {product.description}
        </Card.Text>
        <Card.Text className="product-category">
          <b>category:</b> {product.category}
        </Card.Text>
        <Card.Text className="product-price">
          <b>Price:</b> {product.price}$
        </Card.Text>

        {showButton && (
          <div className="product-buttons">
            <Button variant="primary" as={Link} to={`/products/${product.id}`}>
              View
            </Button>
            <Button
              variant="warning"
              as={Link}
              to={`/edit-product/${product.id}`}
            >
              Edit
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default Product;
