import { useState } from "react";
import * as deckAPI from '../../utilities/decks-api';
import { useNavigate } from 'react-router-dom';

export default function NewDeckForm({setDeckName, deckName, id}) {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: ''
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
            const newDeckName = await deckAPI.editDeckName(formData, id); 
            setDeckName(newDeckName.name);
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
                    placeholder={deckName}
                    onChange={handleChange}
                />
                <button type="Submit">Update Deck Name</button>
            </form>
        </>
    )
}