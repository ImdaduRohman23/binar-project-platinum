import React from 'react';
import './whyUs.css';
import Card from 'react-bootstrap/Card';
import wu1 from '../../assets/wu1.svg';
import wu2 from '../../assets/wu2.svg';
import wu3 from '../../assets/wu3.svg';
import wu4 from '../../assets/wu4.svg';

const SectionWhyUs = () => {
    const cardContents = [
        {
            icon: wu1,
            title: 'Mobil Lengkap',
            content: 'Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat'
        },
        {
            icon: wu2,
            title: 'Harga Murah',
            content: 'Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain'
        },
        {
            icon: wu3,
            title: 'Layanan 24 Jam',
            content: 'Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu'
        },
        {
            icon: wu4,
            title: 'Sopir Profesional',
            content: 'Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu'
        }
    ];

    return (
        <div className="whyUs" id='whyus'>
            <h2>Why Us?</h2>
            <p className='p1'>Mengapa harus pilih Binar Car Rental?</p>
            <div className="whyUs__card">
                {
                    cardContents.map((item, x) => (
                        <Card key={x} style={{ width: '18rem' }}>
                            <Card.Body>
                                <img src={item.icon} alt="icon" />
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.content}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>

        </div>
    )
}

export default SectionWhyUs
