import React, { useState } from 'react';
import { Container, ListGroup, Button,Card, Table,Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
 
const SuggestedProducts = ({product}) => {
  // ... (same as before)
  const navigate=useNavigate();

  const handleCartPage=()=>{
    //<CartPage cartPage={product}/>
    const encodedProduct=encodeURIComponent(JSON.stringify(product))
    navigate(`/cart?product=${encodedProduct}`);
 }   

  return(
    // <Table striped bordered hover>
    //                 <thead>
    //                   <tr>
    //                     <th>Category</th>
    //                     <th>Product</th>
    //                     <th>Price</th>
    //                     <th>Quantity</th>
    //                     <th>Total</th>
    //                     <th>Action</th>
    //                     {/* <th>User Requirement</th> */}
          
    //                   </tr>
    //                 </thead>
    //                 <tbody>
    //               {product.map((item) => (
    //                       <tr key={item.id}>
    //                       <td>{item.category}</td>
    //                       <td>{item.name}</td>
    //                       <td>${item.price}</td>
    //                       <td>1</td>
    //                       <td>${item.price}</td>
    //                       <Button variant="success">Accept</Button>
    //                       <Button variant="danger">Reject</Button>
    //                       </tr>
    //               ))}
    //             </tbody>
    //             </Table>

    <Container>
      <Card>
        {/* <Card.Image varian="top" src={} alt={product.name} /> */}
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>Price: ${product.price}</Card.Text>
          <Button variant="primary" onClick={handleCartPage}> Add to Cart</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};
 
export default SuggestedProducts;