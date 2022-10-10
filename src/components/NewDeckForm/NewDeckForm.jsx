import { useState } from "react";
import * as deckAPI from '../../utilities/decks-api';
import { useNavigate } from 'react-router-dom';
//import createDeck

export default function NewDeckForm({setDeck}) {
    const navigate = useNavigate();
    //create new deck that belongs to this user
    //once form is created, redirect to the "manage deck" page
    //so that user can add cards to the deck

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
            const deck = await deckAPI.createDeck(formData);
            setDeck(deck);
        } catch {
            console.log('create deck failed');
        }
        //navigate('/detail/_id')
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