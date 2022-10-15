import React from 'react';
import { Button } from 'react-bootstrap';
import './banner.css';

const SectionBanner = () => {
    return (
        <div className="banner">
            <div className="banner__container">
                <h2>Sewa Mobil di (Lokasimu) Sekarang</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <Button variant='success' className='banner__button'>Mulai Sewa Mobil</Button>
            </div>
        </div>
    )
}

export default SectionBanner
