import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductPage';
import './style.css';
 
const HomePage = () => {
  const featuredProducts=[
    {id:1, name:'IPHONE', category: 'Mobiles', price: 70000},
    {id:2, name:'REALME' , category:'Mobiles', price: 30000},
    {id:3, name:'CK', category: 'Clothes', price: 6000},
    {id:4, name:'BLACKBERRY' , category:'Clothes', price: 10000},
    {id:5, name:'HP', category: 'Laptops', price: 80000},
    {id:6, name:'DELL' , category:'Laptops', price: 60000},
    {id:7, name:'PUMA', category: 'Shoes', price: 3000},
    {id:8, name:'ADIDAS', category: 'Shoes', price: 2000},
    {id:1, name:'MACBOOK', category: 'Laptops', price: 130000},
  ]; 
  return (
    <div >

    <Container className='homepage'>
          <h2 className="text-center">Available Products</h2>
          <Row>
              {featuredProducts.map((product) => (
                <Col md={4} key={product.id}>
                    <ProductCard product={product} />
                </Col>
          ))}
          </Row>
    </Container>
    </div>

  );
};

export default HomePage;
 