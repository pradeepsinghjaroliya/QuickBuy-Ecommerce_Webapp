import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from "./StateProvider.js";
import { auth } from "./firebase.js";

function Header() {

    const [{basket, user}, dispatch] = useStateValue();

    const handleAuthentication =()=>{
        if(user) {
            auth.signOut();
        }
    }

    return (
        <div className='header' >
            {/* company logo................................ */}
            <div id="header_company">
                <img className="header_logo" 
                    src="https://raw.githubusercontent.com/pradeepsinghjaroliya/image/master/company_logo.png" 
                    alt="company-logo"
                    />
                <span id="company_name">PSJ </span>
            </div>
            <Link to="/" style={{ textDecoration: 'none' }}>
            <div id="header_company_name">
            <span id="header_company_nameTwo">QuickBUY </span>
            </div></Link>
            {/* search box .................................*/}
            <div className="header_search">
                {/*search text box */}
                <input className="header_searchInput" 
                type="text" />
                {/* Search logo*/}
                <SearchIcon className="header_searchIcon" />
            </div>
            {/*rest login and infos ........................*/}
            <div className="header_nav">
                {/* LOGIN OR user name option */}
                <Link to={!user && '/login'} style={{ textDecoration: 'none',color:'white' }}>
                <div onClick={handleAuthentication} 
                className="header_option">
                    <span className="header_optionLineOne"
                    >Hello, {!user ? 'Guest' : user.email }</span>
                    <span className="header_optionLineTwo"
                    >{user ?'Sign Out': 'Sign In'}</span>
                </div>
                </Link >
                {/*orders option */}
                <div className="header_option">
                <span className="header_optionLineOne"
                    >Returns</span>
                    <span className="header_optionLineTwo"
                    >& Orders</span>
                </div>
                {/*cart option */}
                <Link to="/checkout" style={{ textDecoration: 'none',color:'white' }}>
                <div className="header_option_cart">
                    <ShoppingBasketIcon />
                        <span className="header_basketCount"
                        >{basket?.length}
                        </span>
                </div>
                </Link>
            </div>    
        </div>
    )
} 

export default Header;
