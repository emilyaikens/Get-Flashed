import { useState } from "react";
import * as deckAPI from '../../utilities/decks-api';
import { useNavigate } from 'react-router-dom';

export default function NewDeckForm({setDeckName}) {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: ""
    });

    const handleChange = (evt) => {
        setFormData({
        ...formData,
        [evt.target.name]: evt.target.value,
        });
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const newDeck = await deckAPI.createDeck(formData); //save deck to database
            setDeckName(newDeck.name);
            navigate(`/managedeck/${newDeck._id}`);
        } catch {
            console.log('create deck failed');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Deck Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {/* add checkbox for public later */}
                <button type="Submit">Create</button>
            </form>
        </>
    )
}