import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import './cardetail.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const CarDetail = () => {
    const { id } = useParams();
    const url_car = `https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`
    const [car, setCar] = useState();

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
    }

    useEffect(() => (
        getDataCar()
    ), []);

    console.log('car', car)

    return (
        <div className="carDetail">
            <Navigation />
            <div className="carDetail__box">
                <div className="carDetail__box-container">
                    <h3>Hasil Penacarianmu</h3>
                    <Form className='carDetail__form'>
                        <Form.Group className="mb-3" controlId="formNamaMobil">
                            <Form.Label>Nama Mobil</Form.Label>
                            <Form.Control type="text" value={car.name} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formNamaMobil">
                            <Form.Label>Kategori</Form.Label>
                            <Form.Control type="text" value={car.category} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formNamaMobil">
                            <Form.Label>Harga Sewa per Hari</Form.Label>
                            <Form.Control type="text" value={car.price} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formNamaMobil">
                            <Form.Label>Status</Form.Label>
                            <Form.Control type="text" value='Sedang tidak disewa' />
                        </Form.Group>
                    </Form>
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
                        <h4>nama mobil</h4>
                        <p>Kategori</p>
                        <p>Tentukan lama sewa mobil (max. 7 hari)</p>
                        <h5>Calender</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarDetail
