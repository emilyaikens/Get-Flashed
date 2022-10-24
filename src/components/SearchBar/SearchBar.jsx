import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './SearchBar.css';

export default function SearchBar({ allDecks, setAllDecks, setSearchUpdate }) {

    //useState keeps track of form inputs

    const [formData, setFormData] = useState({ search: '' });

    //update the use state as user types in form

    function handleChange(evt) {
        setFormData({
        ...formData,
        [evt.target.name.toLowerCase()]: evt.target.value.toLowerCase(),
        });
        setSearchUpdate([1]); //updates dep array in BrowseAllDecks
    };

    //on submit, send payload to back end and search decks based on payload from form
    //and setalldecks (use state from BrowseAllDecks page). Reset formdata use state 
    //so that the search bar "clears" after user submits query

    // async function handleSubmit(evt) {
    //     evt.preventDefault();
    //     try {
    //         const decks = await searchDecks(formData.search);
    //         setAllDecks(decks);
    //         setFormData({search: ''})
    //     } catch {
    //         console.log('search failed');
    //     }
    // };

    function handleSubmit(evt) {
        evt.preventDefault();
        try {
            let results = allDecks.filter(function(d) {
                let n = d.name.toLowerCase();
                if (n.includes(formData.search)) {
                    return d
                };
            })
            setAllDecks(results);
            console.log(results);
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