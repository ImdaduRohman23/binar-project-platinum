import React from 'react';
import './ourServices.css';
import service from '../../assets/service.svg';
import ceklist from '../../assets/service-ceklist.svg'

const SectionOurServices = () => {
    const desc = [
        'Sewa Mobil Dengan Supir di Bali 12 Jam',
        'Sewa Mobil Lepas Kunci di Bali 24 Jam',
        'Sewa Mobil Jangka Panjang Bulanan',
        'Gratis Antar - Jemput Mobil di Bandara',
        'Layanan Airport Transfer / Drop In Out'
    ];

    return (
        <div className="ourServices" id='ourservices'>
            <div className="ourServices__left">
                <img src={service} alt="" />
            </div>
            <div className="ourServices__right">
                <h3>Best Car Rental for any kind of trip in (Lokasimu)!</h3>
                <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                {
                    desc.map((item, key) => (
                        <p key={key}>
                            <img src={ceklist} alt="ceklist" />  {item}
                        </p>
                    ))
                }
            </div>
        </div>
    )
}

export default SectionOurServices
