import React from 'react'
import './home.css'
import Madone from '../../assets/MadoneSRL.webp'



const Home = () => {
  return (
    <>
        <section className='box'>
            <div className='home-img'>
                <img src={Madone}></img>
            </div>
        </section>
    </>
  )
}

export default Home
