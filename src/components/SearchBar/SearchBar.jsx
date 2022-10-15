import { useState } from 'react';
import { searchDecks } from '../../utilities/decks-api';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './SearchBar.css';

export default function SearchBar({ setAllDecks }) {

    const [formData, setFormData] = useState({ search: '' });

    function handleChange(evt) {
        setFormData({
        ...formData,
        [evt.target.name]: evt.target.value,
        });
    };

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const decks = await searchDecks(formData.search);
            setAllDecks(decks);
            setFormData({search: ''})
        } catch {
            console.log('search failed');
        }
    };

    return (
        <>
            <div className="search-container">
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col xs="auto">
                            <Form.Control
                                onChange={handleChange}
                                name="search"
                                type="text"
                                placeholder="search decks here"
                            />
                        </Col>
                        <Col xs="auto">
                            <Button className="form-button" type="submit">Search</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
            <br/>
            <br/>
        </>
    )
}