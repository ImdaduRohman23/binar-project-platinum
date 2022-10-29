import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import SectionHero from '../../components/SectionHero';
import axios from "axios";
import './cars.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';

const Cars = () => {
    const url = 'https://bootcamp-rent-cars.herokuapp.com/customer/v2/car';
    const [cars, setCars] = useState([]);
    const [namaMobil, setNamaMobil] = useState("");
    const [kategoriMobil, setKategoriMobil] = useState("");
    const [minPrice, setMinPrice]= useState("");
    const [maxPrice, setMaxPrice]= useState("");
    const [isRented, setIsRented] = useState("");
    const [page] = useState(1);
    const [limit] = useState(50);  
    const navigate = useNavigate();

    const getDataCars = (namaMobil, kategoriMobil, minPrice, maxPrice, isRented, page, limit) => {
        axios({
            method: "GET",
            url: url,
            timeout: 120000,
            params: {
                name: namaMobil,
                category: kategoriMobil,
                minPrice: minPrice,
                maxPrice: maxPrice,
                isRented: isRented,
                page: page,
                pageSize: limit,
            },
            headers: {
                accept: 'application/json',
            }
            })
            .then((response) => { 
                setCars(response.data.cars);
                // setLoading(false);
            })
            .catch((error) => {
                alert(error);
                // setLoading(false);
            });
    }

    useEffect(() => {
        getDataCars(namaMobil, kategoriMobil, minPrice, maxPrice, isRented, page, limit)
    }, [namaMobil, kategoriMobil, minPrice, maxPrice, isRented, page, limit]);

    const handlePilihMobil = (id) => {
        navigate(`/cars/${id}`)
    }

    return (
        <div>
            <Navigation />
            <SectionHero />
            <div className="search">
                <div className="search__container">
                <Form className='search__form'>
                    <Form.Group controlId="formNama" className="mt-3 flex-fill">
                    <Form.Label>Nama Mobil</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ketik Nama/Tipe Mobil"
                        autoComplete="off"
                        onChange={(e) => setNamaMobil(e.target.value)}
                        value={namaMobil}
                    />
                    </Form.Group>
                    <Form.Group controlId="formKategori" className="mt-3 flex-fill">
                    <Form.Label>Kategori Mobil</Form.Label>
                    <Form.Select onChange={(e) => setKategoriMobil(e.target.value)}>
                        <option key="blankChoice" hidden>
                        Kategori
                        </option>
                        <option value='small'>small</option>
                        <option value='medium'>medium</option>
                        <option value='large'>large</option>
                    </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="formMinPrice" className="mt-3 flex-fill">
                    <Form.Label>Harga Minimal</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Ketik harga minimal"
                        autoComplete="off"
                        onChange={(e) => setMinPrice(e.target.value)}
                        value={minPrice}
                    />
                    </Form.Group>
                    <Form.Group controlId="formMinPrice" className="mt-3 flex-fill">
                    <Form.Label>Harga Maksimal</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Ketik harga maksimal"
                        autoComplete="off"
                        onChange={(e) => setMaxPrice(e.target.value)}
                        value={maxPrice}
                    />
                    </Form.Group>
                    
                    <Form.Group controlId="formSewa" className="mt-3 flex-fill">
                    <Form.Label>Status</Form.Label>
                    <Form.Select onChange={(e) => setIsRented(e.target.value)}>
                        <option key="blankChoice" hidden>
                        Status Mobil
                        </option>
                        <option value="false">Tidak Disewakan</option>
                        <option value="true">Disewakan</option>
                    </Form.Select>
                    </Form.Group>
                </Form>
                </div>
            </div>

            <div className="carslist">
                <div className="carslist__container">
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            cars.map( item => (
                                <Col key={item.id}>
                                <Card style={{ width: '300px' }}>
                                    <div className="carlist__img">
                                        <Card.Img variant="top" src={item.image} />
                                    </div>
                                    <Card.Body>
                                    <Card.Title className='carlist__name'>{item.name}</Card.Title>
                                    <Card.Text className='carlist__price'>
                                        {item.price}
                                    </Card.Text>
                                    <Card.Text className='carlist__text'>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="success" style={{width : '100%'}} onClick={() => handlePilihMobil(`${item.id}`)}>Pilih Mobil</Button>
                                    </Card.Body>
                                </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cars
