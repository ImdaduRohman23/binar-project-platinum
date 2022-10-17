import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import SearchBox from '../../components/SearchBox';
import SectionHero from '../../components/SectionHero';
import axios from "axios";
import './cars.css'


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
            <div>
            {
                cars.map(i => (
                    <div className="carsList">
                        <div className="carsList__container">
                            <h3>{i.name}</h3>
                        </div>
                    </div>
                ))
            }
            </div>
            <Footer />
        </div>
    )
}

export default Cars
