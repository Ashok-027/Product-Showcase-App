
import React, {useState, useEffect} from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css';



function Navbar(){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }

    };
    

    useEffect(() =>{
        showButton()
    }, []);
    function logout()  {
      window.localStorage.clear();
      localStorage.setItem("isLogged", false)
      console.log("Clicked")
      window.alert("Log Out successfull")
      window.location.href="/CustomerLogin"
    
    };

    window.addEventListener('resize', showButton);

    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                  <Link to="/homepage" className="navbar-logo" onClick={closeMobileMenu}>
                    HomePage <i className="fab fa-typo3"/>

                  </Link>
                  <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                  </div>
                  <ul className= {click ? 'nav-menu active' : 'nav-menu'}>
                    
                    <li className='nav-item'>
                      <Link to='/homepage' className='nav-links' onClick={closeMobileMenu}>
                        Dashboard
                      </Link>  
                    </li>
                    
                  </ul>
                  {button && <Button buttonStyle='btn--outline' onClick={logout}>Log Out</Button>}
                </div>
            </nav>
        </>
    )
}
export default Navbar