import React from 'react';
import "./navbar.css";
import { Search } from '@mui/icons-material';
import { ShoppingBasketOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <div className="navbar">
            <Link style={{textDecoration:"none"}} to="/"><h1>LOGO</h1></Link>
            <div className="search">
                <input type="text" />
                <Search style={{cursor:"pointer"}}/>
            </div>
            <div className="navbar_right">
           <Link to="/basket"><ShoppingBasketOutlined style={{cursor:"pointer"}}/></Link> 
           <Link to="/login"><h3>Login</h3></Link> 

            </div>
        </div>
    )
}
