import React from 'react'
import Banner from '../../components/banner/Banner'
import Categories from '../../components/categories/Categories'
import Featured from '../../components/featured/Featured'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Banner />
            <Featured />
            <Categories />
            <Footer />
        </div>
    )
}

export default Home
