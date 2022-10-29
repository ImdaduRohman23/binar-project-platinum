import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import './cardetail.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Footer from '../../components/Footer';
import swal from 'sweetalert';

const CarDetail = () => {
    const { id } = useParams();
    const url_car = `https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`;
    const [car, setCar] = useState([]);

    const getDataCar = (id) => {
        axios({
            method: "GET",
            url: url_car,
            timeout: 120000,
            params: {
                id: id
            },
            headers: {
                accept: 'application/json',
            }
            })
            .then(response => setCar(response.data))
            .catch(error => alert(error))
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        getDataCar(id)
    }, [id]);

    const handleLP = () => (
        swal("Good job!", "LEVEL GOLD COMPLETED", "success")
    )

    return (
        <div className="carDetail">
            <Navigation />
            <div className="carDetail__box">
                <div className="carDetail__box-container">
                    <h3>Hasil Pilihanmu</h3>
                    <div className="carDetail__box-form">
                        <div className="box-form name">
                            <p className='box-form__title' >Nama Mobil</p>
                            <p className='box-form__content'>{car.name}</p>
                        </div>
                        <div className="box-form category">
                            <p className='box-form__title'>Kategorti</p>
                            <p className='box-form__content'>{car.category}</p>
                        </div>
                        <div className="box-form price">
                            <p className='box-form__title'>Harga Sewa per Hari</p>
                            <p className='box-form__content'>{car.price}</p>
                        </div>
                        <div className="box-form status">
                            <p className='box-form__title'>Status</p>
                            {
                                car.status? <p className='box-form__content'>Sedang disewa</p> : <p className='box-form__content'>Sedang tidak disewa</p>
                            }
                        </div>
                    </div>
                    <div className="carDetail__box-content">

                    </div>
                </div>
            </div>
            <div className="carDetail__content">
                <div className="carDetail__content-container">
                    <div className="carDetail__content-kiri">
                        <h4>Tentang Paket</h4>
                        <p>Icludes</p>
                        <ul>
                            <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                            <li>Sudah termasuk bensin selama 12 jam </li>
                            <li>Sudah termasuk Tiket Wisata</li>
                            <li>Tiket Wisata Sudah termasuk pajak</li>
                        </ul>
                        <p>Exclude</p>
                        <ul>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                        </ul>
                        <br />
                        <h4>Refund, Reschedule, Overtime</h4>
                        <ul>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                        </ul>
                    </div>
                    <div className="carDetail__content-kanan">
                        <div className="carDetail__content-kanan-img">
                            <img src={car.image} alt="car" />
                        </div>
                        <h4>{car.name}</h4>
                        <i className="bi bi-people-fill"> {car.category}</i>
                        <p>Tentukan lama sewa mobil (max. 7 hari)</p>
                        <h5 className='carDetail__content-kanan-total'>Total: Rp.{car.price}</h5>
                        <Button onClick={handleLP} className='button-pembayaran' variant='success' >
                            Lanjutkan Pembayaran
                        </Button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CarDetail
