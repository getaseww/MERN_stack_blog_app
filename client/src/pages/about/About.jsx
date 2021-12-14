import React from 'react'
import './about.css'
import Footer from '../../components/footer/Footer'
export default function About() {
    return (
        <div className='about'>
            <h2 className='aboutTitle'>About Us</h2>
            <div className='contentRow'>
                <p className="aboutContentLeft"></p>
                <p className='aboutContentCenter'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia delectus quae optio nobis consectetur non deserunt placeat sed perspiciatis maxime, error, porro saepe! Nam, necessitatibus veniam veritatis officia dolores cumque?</p>
                <p className="aboutContentRight"></p>
            </div>
            <Footer />
        </div>
    )
}
