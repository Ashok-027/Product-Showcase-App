import React, {  useState } from 'react';
import { Container, Button,Form,Row,Col } from 'react-bootstrap';
import ProductCard from './ProductPage';
import {   useSearchParams } from "react-router-dom";
import './style.css';

const SuggestedProducts = () => {

  const [userBudget,setUserBudget]=useState();
  const [filteredProducts,setFilteredProducts]=useState([]);
  const [searchParams]=useSearchParams();
  const [showMessage,setShowMessage]=useState(false);

  const suggestedProducts=[
    {id:1, name:'Iphone10', category: 'Mobiles', price: 70000},
    {id:2, name:'Iphone9', category: 'Mobiles', price: 60000},
    {id:3, name:'Iphone8', category: 'Mobiles', price: 50000},
    {id:4, name:'Iphone7', category: 'Mobiles', price: 40000},
    {id:5, name:'Iphone6', category: 'Mobiles', price: 30000},

    {id:6, name:'Realme5' , category:'Mobiles', price: 30000},
    {id:7, name:'Realme4' , category:'Mobiles', price: 25000},
    {id:8, name:'Realme3' , category:'Mobiles', price: 20000},
    {id:9, name:'Realme2' , category:'Mobiles', price: 15000},
    {id:10, name:'Realme1' , category:'Mobiles', price: 10000},

    {id:11, name:'CK', category: 'Clothes', price: 5000},
    {id:12, name:'BLACKBERRY', category: 'Clothes', price: 8000},
    {id:13, name:'DELL', category: 'Laptops', price: 42000},
    {id:14, name:'HP', category: 'Laptops', price: 60000},
    {id:15, name:'MACKBOOK', category: 'Laptops', price: 90000},

    {id:6, name:'PUMA' , category:'Shoes', price: 2000},
    {id:7, name:'ADIDAS' , category:'Shoes', price: 1000},
    

  ];
  
  const suggested=()=>{
    const productCategory=searchParams.get('productCategory');
    const productPrice=searchParams.get('productPrice');
    const discountPrice=(productPrice*userBudget/100);
    const filteredProducts=suggestedProducts.filter(product=>{
      return product.price<=(productPrice-discountPrice) && (product.category===productCategory);
    });
  setFilteredProducts(filteredProducts);
  setShowMessage(filteredProducts.length===0);
};
  return (
    <Container className='form'>
      <h3 className="home"  ><a href='/homepage'>-- Back to Products Page</a></h3>
      <h2 className="text-center">Showing Suggestions Based on User Requirement</h2>
          <Form >
                  <Form.Group controlId="userBudget">
                    <Form.Label className='target'>Targeted Savings</Form.Label>
                    <Form.Control type="percentage" placeholder="Enter your Savings Percentage" value={userBudget} onChange={(e)=>setUserBudget(e.target.value)}/>
                  </Form.Group>
                  <Button variant="primary" onClick={suggested}>Show Products</Button>      
          </Form>

                    {filteredProducts.length>0 ?(
                
                    <Container>
                    <h1 className="text-center">Suggested Products:</h1>
                    <Row>
                        {filteredProducts.map((product) => (
                          <Col md={4} key={product.id}>
                              <ProductCard product={product} />
                          </Col>
                    ))}
                    </Row>
                    </Container>
                    ):showMessage ?(
                      <h2 className="cart">No Products found Based on Your Target Savings....</h2>
                    ):null}
          
                 
      
    </Container>
  );
};
export default SuggestedProducts;

 