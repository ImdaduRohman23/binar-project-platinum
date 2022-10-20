import React from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import './cardetail.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CarDetail = () => {
    const { id } = useParams();

    return (
        <div className="carDetail">
            <Navigation />
            <div className="carDetail__box">
                <div className="carDetail__box-container">
                    <h3>Hasil Penacarianmu</h3>
                    <Form className='carDetail__form'>
                        <Form.Group className="mb-3" controlId="formNamaMobil">
                            <Form.Label>Nama Mobil</Form.Label>
                            <Form.Control type="text" value='mobil' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formNamaMobil">
                            <Form.Label>Kategori</Form.Label>
                            <Form.Control type="text" value='kategori' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formNamaMobil">
                            <Form.Label>Harga Sewa per Hari</Form.Label>
                            <Form.Control type="text" value='berapa hayo' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formNamaMobil">
                            <Form.Label>Status</Form.Label>
                            <Form.Control type="text" value='nunggu api' />
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
                        <h3>Gambar Mobil</h3>
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
