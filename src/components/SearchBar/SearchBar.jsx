import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './SearchBar.css';

export default function SearchBar({ allDecks, setAllDecks, setSearchUpdate }) {

    //useState keeps track of form inputs

    const [formData, setFormData] = useState({ search: '' });

    //update the use state as user types in form. toLowerCase for search function

    function handleChange(evt) {
        setFormData({
        ...formData,
        [evt.target.name.toLowerCase()]: evt.target.value.toLowerCase(),
        });
        setSearchUpdate([1]); //updates dep array in BrowseAllDecks
    };

    //search within the decks fetched from db in BrowseAllDecks
    //update setAllDecks to that search results are rendered

    function handleSubmit(evt) {
        evt.preventDefault();
        try {
            let results = allDecks.filter(function(d) {
                let n = d.name.toLowerCase();
                if (n.includes(formData.search)) {
                    return d;
                };
            })
            setAllDecks(results);
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