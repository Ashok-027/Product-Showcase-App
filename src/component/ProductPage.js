import React from 'react';
import { useNavigate } from "react-router-dom";
import './style.css';
import { Container, Card, Button } from 'react-bootstrap';
 
const ProductPage = ({ product }) => {
const navigate=useNavigate();
 const handleCartPage=()=>{
    const encodedProduct=encodeURIComponent(JSON.stringify(product))
    navigate(`/cart?product=${encodedProduct}`);
 }   
  return (
    <Container>
      

      <Card>
      <div className='offer-container'>
        {/* <Card.Image varian="top" src={} alt={product.name} /> */}
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>Category: {product.category}</Card.Text>
          <Card.Text >Price: Rs {product.price}</Card.Text>
          <Button variant="primary" onClick={handleCartPage}> Add to Cart</Button>
        </Card.Body>
        </div>

      </Card>

    </Container>
  );
};
export default ProductPage; 