import React from 'react';
import './search.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SearchBox = () => {
    return (
        <div className="search">
            <div className="search__container">
            <Form className='search__form'>
                <Form.Group className="mb-3" controlId="formNamaMobil">
                    <Form.Label>Nama Mobil</Form.Label>
                    <Form.Control type="text" placeholder="Ketik nama mobil" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Kategori</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option >Ketik nama mobil</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Harga</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Masukan Harga Sewa/Hari</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Status</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Masukan Harga Sewa/Hari</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="success" type="submit" className='search__button'>
                    Cari Mobil
                </Button>
            </Form>
            </div>
        </div>
    )
}

export default SearchBox
