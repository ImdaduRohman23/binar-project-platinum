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
                    <h4>Hasil Penacarianmu</h4>
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
        </div>
    )
}

export default CarDetail
