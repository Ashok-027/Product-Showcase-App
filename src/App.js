import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './component/HomePage';
import ProductPage from './component/ProductPage';
import CartPage from './component/CartPage';
import SavingsSuggestions from './component/SuggestedProducts';
 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/suggestions" element={<SavingsSuggestions />} />
      </Routes>
    </Router>
  );
}
 
export default App;
 