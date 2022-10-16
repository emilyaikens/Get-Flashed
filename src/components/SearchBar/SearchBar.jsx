import { useState } from 'react';
import { searchDecks } from '../../utilities/decks-api';
import Form from 'react-bootstrap/Form';
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
            <div >
                <Form onSubmit={handleSubmit}>
                        <div className="search-container">
                            <Form.Control
                                onChange={handleChange}
                                name="search"
                                type="text"
                                placeholder="search public decks here"
                            />
                            <Button className="form-button" type="submit">Search</Button>
                            </div>
                </Form>
            </div>
            <br/>
            <br/>
        </>
    )
}