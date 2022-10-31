import React from 'react';
import Navigation from '../../components/Navigation';
import './payment.css';
import paymentLine from '../../assets/payment-line.svg';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import { Button } from 'react-bootstrap';

const Payment = () => {
    return (
        <div className="payment">
            <Navigation />
            <div className="payment__top">
                <i class="bi bi-arrow-left"> <strong>  Pembayaran</strong></i>
                <div className="top-step">
                    <p><i class="bi bi-1-square-fill"></i>  Pilih Metode <span><img src={paymentLine} alt="" /></span></p>
                    <p><i class="bi bi-2-square-fill"></i>  Bayar <span><img src={paymentLine} alt="" /></span></p>
                    <p><i class="bi bi-3-square-fill"></i>  Tiket</p>
                </div>
            </div>
            <div className="payment__detail">
                <h1>DETAIL PESANANMU</h1>
            </div>
            <div className="payment__content">
                <div className="payment__content-container">
                    <div className="payment__content-left">
                        <h3>Pilih Bank Transfer</h3>
                        <p>Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking</p>
                        <div>
                            <div className="bank">
                                <p><span className='bca'>BCA</span> BCA Transfer</p>
                                <Form.Check
                                reverse
                                name="group1"
                                type='radio'
                                id='1'
                                />
                            </div>
                            <div className="bank">
                                <p><span className='bca'>BNI</span> BNI Transfer</p>
                                <Form.Check
                                reverse
                                name="group1"
                                type='radio'
                                id='2'
                                />
                            </div>
                            <div className="bank">
                                <p><span className='bca'>Mandiri</span> Mandiri Transfer</p>
                                <Form.Check
                                reverse
                                name="group1"
                                type='radio'
                                id='3'
                                />
                            </div>
                        </div>

                    </div>
                    <div className="payment__content-right">
                        <h3>Nama Mobil</h3>
                        <p>Kapasitas</p>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Rincian</Accordion.Header>
                                <Accordion.Body>
                                <h5>Harga</h5>
                                <ul>
                                    <li> <span>Sewa Mobil Rp.500.000 x 7 Hari</span> <span>7000000</span></li>
                                </ul>
                                <h5>Biaya Lainnya</h5>
                                <ul>
                                    <li><span>Pajak</span> <span className="termasuk">Termasuk</span> </li>
                                    <li><span>Biaya makan sopir</span> <span className="termasuk">Termasuk</span> </li>
                                </ul>
                                <h5>Belum Termasuk</h5>
                                <ul>
                                    <li>Bensin</li>
                                    <li>Tol dan parkir</li>
                                </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <div className="payment__content-right-total">
                            <h6>Total</h6>
                            <h6>7000000</h6>
                        </div>
                        <Button variant='success'>Bayar</Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Payment
