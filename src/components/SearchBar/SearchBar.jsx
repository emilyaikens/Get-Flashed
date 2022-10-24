import { useState } from 'react';
import { searchDecks } from '../../utilities/decks-api';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './SearchBar.css';

export default function SearchBar({ allDecks, setAllDecks }) {

    //useState keeps track of form inputs

    const [formData, setFormData] = useState({ search: '' });

    //update the use state as user types in form

    function handleChange(evt) {
        setFormData({
        ...formData,
        [evt.target.name]: evt.target.value,
        });
    };

    //on submit, send payload to back end and search decks based on payload from form
    //and setalldecks (use state from BrowseAllDecks page). Reset formdata use state 
    //so that the search bar "clears" after user submits query

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