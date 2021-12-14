import React from 'react'
import "./footer.css"
import {Link} from 'react-router-dom'
export default function Footer() {
    return (
        <div className='footer'>
            <div className="footerRow">
                <div className='footerColumn'>
                    <h2 className='title'>About Us</h2>
                    <p className='aboutDetaile'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea alias impedit quos quam at reprehenderit iste repudiandae voluptas sunt. Ipsam iusto facilis accusantium. Assumenda temporibus non similique consequatur, rem voluptate!</p>
                </div>
                <div className='footerColumn'>
                    <h2 className='title'>Pages</h2>
                    <ul className='columnList'>
                        <li className='listElement'><Link to='/' className='pageLink'>Home</Link></li>
                        <li className='listElement'><Link to='/contact' className='pageLink'>Contact</Link></li>
                        <li className='listElement'><Link to='/about' className='pageLink'>About</Link></li>
                    </ul>
                </div>
                <div className='footerColumn'>
                    <h2 className='title'>Contact</h2>
                    <p className='aboutDetaile'>Addis Abeba, Ethiopia</p>
                    <ul className='columnList'>
                        <li className='listElement'>hello@gmail.com</li>
                        <li className='listElement'>+251990909090</li>
                        <li className='listElement'>+251990909090</li>
                    </ul>
                </div>
                <div className='footerColumn'>
                    <h2 className='title'>Social Links</h2>
                    <ul className='columnList'>
                        <li className='listElement'><a href='https://facebook.com' className='footerLink'>Facebook</a></li>
                        <li className='listElement'><a href="https://telegram.org" className='footerLink'>Telegram</a></li>
                        <li className='listElement'><a href="https://linkedin.com" className='footerLink'>LinkedIn</a></li>
                        <li className='listElement'><a href="https://twitter.com" className='footerLink'>Twitter</a></li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <p className='copyrightContent'>&copy; 2021 MyBlog All rights reserved. </p>
            </div>
        </div>
    )
}
