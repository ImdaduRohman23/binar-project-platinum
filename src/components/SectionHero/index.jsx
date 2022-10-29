import React from 'react';
import { Button } from 'react-bootstrap';
import './sectionHero.css';
import car from '../../assets/car.svg';
import { Link, useLocation } from 'react-router-dom';

const SectionHero = () => {
    const locationListCars = useLocation();
    
    return (
        <div className="sectionHero">
            <div className="sectionHero__left">
                <h1>Sewa & Rental Mobil Terbaik di Yogyakarta</h1>
                <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                <Link to='/cars' hidden={locationListCars.pathname === '/cars' ? true : false}>
                    <Button variant='success'>Mulai Sewa Mobil</Button>
                </Link>
            </div>
            <div className="sectionHero__right">
                <img src={car} alt="" />
            </div>
        </div>
    )
}

export default SectionHero
