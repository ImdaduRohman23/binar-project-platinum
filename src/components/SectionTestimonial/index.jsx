import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Card from 'react-bootstrap/Card';
import './testi.css';
import testi1 from '../../assets/testi-1.svg';
import testi2 from '../../assets/testi-2.svg';
import testirate from '../../assets/testi-rate.svg';


const handleDragStart = (e) => e.preventDefault();
const items = [
    <div className="card-testi-container">
        <Card style={{ width: '60%', background: '#F1F3FF'}} onDragStart={handleDragStart} role="presentation">
            <div className="card-testi">
                <div className="card-kiri">
                    <img src={testi1} alt="icon" />
                </div>
                <div className="card-kanan">
                    <img src={testirate} alt="rate" style={{marginBottom: '10px'}}/>
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                    <p>John Dee 32, Bromo</p>
                </div>
            </div>
        </Card>
    </div>,
    <div className="card-testi-container">
        <Card style={{ width: '60%', background: '#F1F3FF'}} onDragStart={handleDragStart} role="presentation">
            <div className="card-testi">
                <div className="card-kiri">
                    <img src={testi2} alt="icon" />
                </div>
                <div className="card-kanan">
                    <img src={testirate} alt="rate" style={{marginBottom: '10px'}}/>
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                    <p>John Dee 32, Bromo</p>
                </div>
            </div>
        </Card>
    </div>,
    <div className="card-testi-container">
        <Card style={{ width: '60%', background: '#F1F3FF'}} onDragStart={handleDragStart} role="presentation">
            <div className="card-testi">
                <div className="card-kiri">
                    <img src={testi1} alt="icon" />
                </div>
                <div className="card-kanan">
                    <img src={testirate} alt="rate" style={{marginBottom: '10px'}}/>
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                    <p>John Dee 32, Bromo</p>
                </div>
            </div>
        </Card>
    </div>


    // <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
    // <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
    // <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
    // <div>Halo Gaes</div>



    // {
    //     cardTesti.map((item, x) => (
    //         <Card key={x} style={{ width: '18rem' }}>
    //             <Card.Body>
    //                 <img src={item.icon} alt="icon" />
    //                 <Card.Title>{item.title}</Card.Title>
    //                 <Card.Text>{item.content}</Card.Text>
    //             </Card.Body>
    //         </Card>
    //     ))
    // }
];

const SectionTesti = () => {
    return (
        <AliceCarousel mouseTracking items={items} />
    );
}

export default SectionTesti