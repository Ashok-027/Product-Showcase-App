import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './component/HomePage';
import ProductPage from './component/ProductPage';
import CartPage from './component/CartPage';
import SavingsSuggestions from './component/SuggestedProducts';
import CusLogin from './component/CusLogin';
 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CusLogin/>} />
        {/* <Route path='/CusSignUp' element={<CusSignUp/>}/> */}

        <Route path="/homepage" element={<HomePage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/suggestions" element={<SavingsSuggestions />} />
      </Routes>
    </Router>
  );
}
 
export default App;
 