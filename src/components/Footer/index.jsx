import React from 'react';
import './footer.css';
import sosmed from '../../assets/footer-sosmed.svg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__address">
                    <p>Jalan Suroyo No. 161 Mayangan Kota Yogyakarta 672000</p>
                    <p>binarcarrental@gmail.com</p>
                    <p>081-233-334-808</p>
                </div>
                <div className="footer__nav">
                    <p>Our services</p>
                    <p>Why Us</p>
                    <p>Testimonial</p>
                    <p>FAQ</p>
                </div>
                <div className="footer__sosmed">
                    <p>Connect with us</p>
                    <img src={sosmed} alt="sosmed" />
                </div>
                <div className="footer__copyright">
                    <p>Copyright Binar 2022</p>
                    <div className="logo"></div>
                </div>
            </div>
        </div>
    )
}

export default Footer
