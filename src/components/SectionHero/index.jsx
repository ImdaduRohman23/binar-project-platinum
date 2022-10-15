import React from 'react';
import { Button } from 'react-bootstrap';
import './sectionHero.css';
import car from '../../assets/car.svg';

const SectionHero = () => {
    return (
        <div className="sectionHero">
            <div className="sectionHero__left">
                <h1>Sewa & Rental Mobil Terbaik di Yogyakarta</h1>
                <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                <Button variant='success'>Mulai Sewa Mobil</Button>
            </div>
            <div className="sectionHero__right">
                <img src={car} alt="" />
            </div>
        </div>
    )
}

export default SectionHero
