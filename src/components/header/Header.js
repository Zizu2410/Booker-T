import React from 'react'
import './Header.css'
import Logo from '../../assets/BT_logo_2019.svg.png'
import { SearchOutlined } from '@material-ui/icons'
import { Button } from '@material-ui/core'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const Header = () => {
    return (
        <div className='header'>
            <div className='header__logo'>
                <img src={Logo} alt='Logo' />
                <h3>BOOKER-T</h3>
            </div>
            <div className='header__search'>
                <SearchOutlined className='header__search__icon' />
                <input placeholder='Search...' className='header__search__input' />
            </div>
            <div className='header__options'>
                <h4 className='header__category'>Categories</h4>
                <Button className='header__login'>Login</Button>
                <Button className='header__signup'>Signup</Button>
                <ShoppingCartOutlinedIcon className='header__cart' />
            </div>

        </div>
    )
}

export default Header
