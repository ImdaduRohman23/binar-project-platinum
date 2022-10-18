import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import SearchBox from '../../components/SearchBox';
import SectionHero from '../../components/SectionHero';
import axios from "axios";
import './cars.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Cars = () => {
    const url = 'https://bootcamp-rent-cars.herokuapp.com/customer/v2/car';
    const [cars, setCars] = useState([]);

    const getDataCars = () => {
        axios
            .get(url)
            // ({
            //     method: "GET",
            //     url: url,
            //     timeout: 120000,
            //     params: {
            //         page: 1,
            //         pageSize: 50
            //     },
            //     headers: {
            //         'accept': 'application/json',
            //         'access_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImN1c3RvbWVyQGJjci5pbyIsInJvbGUiOiJDdXN0b21lciIsImlhdCI6MTY2NTk4NjE1NX0.GaQy21o4L1vom6Dqu4cXp90klyXEcZ17IXGehFvGngg'
            //     }
            // })
            .then(res => setCars(res.data.cars))
            .catch(err => console.log(err))
    }

    useEffect(() => (
        getDataCars()
    ), []);

    return (
        <div>
            <Navigation />
            <SectionHero />
            <SearchBox />
            <div className="carslist">
                <div className="carslist__container">
                {
                    cars.map( item => (
                        <Card style={{ width: '300px' }}>
                            <div className="carlist__img">
                                <Card.Img variant="top" src={item.image} />
                            </div>
                            {/* <img src={item.image} alt="car" /> */}
                            <Card.Body>
                            <Card.Title className='carlist__name'>{item.name}</Card.Title>
                            <Card.Text className='carlist__price'>
                                {item.price}
                            </Card.Text>
                            <Card.Text className='carlist__text'>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button className='carlist__button' variant="success" style={{width : '100%'}} >Pilih Mobil</Button>
                            </Card.Body>
                        </Card>
                    ))
                }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cars
