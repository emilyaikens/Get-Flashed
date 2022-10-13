import { useState } from 'react';
import { searchDecks } from '../../utilities/decks-api'

export default function SearchBar({ setAllDecks, allDecks }) {

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
            <form onSubmit={handleSubmit}>
                <label>Browse Decks</label>
                <input 
                    onChange={handleChange}
                    name="search"
                    type="text"
                    placeholder="search decks here"
                />
                <button type="submit">Search</button>
            </form>
        </>
    )
}