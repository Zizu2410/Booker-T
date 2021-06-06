import React from 'react'
import './Header.css'
import Logo from '../../assets/BT_logo_2019.svg.png'
import { SearchOutlined } from '@material-ui/icons'
import { Button } from '@material-ui/core'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import {
Link,useHistory
  } from "react-router-dom";


const Header = () => {
    const history = useHistory()
    return (
        <div className='header'>
            <Link to='/'>
                <div className='header__logo'>
                    <img src={Logo} alt='Logo' />
                    <h3>BOOKER-T</h3>
                </div>
            </Link>
            <div className='header__search'>
                <SearchOutlined className='header__search__icon' />
                <input placeholder='Search...' className='header__search__input' />
            </div>
            <div className='header__options'>
                <h4 className='header__category'
                onClick={(e)=>{
                    history.push('/courses')
                }}>Categories</h4>
                
                    <Button className='header__login'
                    onClick={(event)=>{
                        
                        history.push('/login')
                    }}>Login</Button>
                
                <Button className='header__signup'
                onClick={(event)=>{
                        
                    history.push('/signup')
                }}>Signup</Button>
                <ShoppingCartOutlinedIcon className='header__cart'
                onClick={(event) => {
                    history.push('/cart')
                }} />
            </div>

        </div>
    )
}

export default Header
