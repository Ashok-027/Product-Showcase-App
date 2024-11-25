import React, { useEffect, useState } from 'react';
import {  useNavigate, useSearchParams } from "react-router-dom";


import { Container, Table, Button, Row } from 'react-bootstrap';
 
const CartPage = () => {
   const [cartItems,setCartItems]=useState([]);
   const [searchParams]=useSearchParams();
   const navigate=useNavigate();

   useEffect(()=>{
    const productData=searchParams.get('product');
    if(productData){
        const decodedProduct=JSON.parse(decodeURIComponent(productData));
        setCartItems([...cartItems,decodedProduct]);
    }
   },[searchParams]);

 
const handleRemoveProduct=(productId)=>{
  setCartItems(cartItems.filter((item)=>item.id!==productId));
};

const handleCheckoutClick=()=>{
  window.open('https://www.amazon.com');
};

const handleSuggestionClick=(product)=>{
    navigate(`/suggestions?productPrice=${product.price}&productCategory=${product.category}`);
}

const promotions=[
  {id:1, title:'Mobiles Sale', description:'10% off on Mobiles'},
  {id:2, title:'Laptops Sale', description:'20% off on Laptops'},
  {id:3, title:'Clothes Sale', description:'5% off on Clothes'},
  {id:4, title:'Shoes Sale', description:'5% off on Shoes'},

]
  return (
    <Container className='cartpage'>
      <h3 className="home" ><a href='/homepage'>-- Back to Home Page</a></h3>

      <h1 className="text-center">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <h2 className="cart">Your cart is empty....</h2>
      ) : (
        <Table striped bordered hover className='table'>
          <thead >
            <tr>
              <th>Category</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
              {/* <th>User Requirement</th> */}

            </tr>
          </thead>
          <tbody className='body'>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.category}</td>
                <td>{item.name}</td>
                <td>Rs {item.price}</td>
                <td>1</td>
                <td>Rs {item.price}</td>
                <Row>
                <td><Button variant="success" size="sm" onClick={handleCheckoutClick}>Proceed to Checkout</Button></td>
                <td><Button variant="primary" size="sm" onClick={()=>handleSuggestionClick(item)}>suggestion</Button></td>
                <td><Button variant="danger" size="sm" onClick={()=>handleRemoveProduct(item.id)}>Remove</Button></td>
                </Row>
                
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <h1 className="promotions">Current Promotions</h1>
      <ul className="list-group">
        {promotions.map((promotion) => (
          <>
            {promotion.title}: {promotion.description}<a href='/homepage'>Click Here</a><br></br>
          </> 
        ))}
      </ul>
    </Container>

    
  );
};
export default CartPage; 