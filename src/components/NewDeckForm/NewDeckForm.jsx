import { useState } from "react";
import * as deckAPI from '../../utilities/decks-api';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function NewDeckForm({setDeckName}) {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({ 
        name: '',
        share: "private",
    });

    function handleChange(evt) {
        setFormData({
        ...formData,
        [evt.target.name]: evt.target.value,
        });
    };

    async function handleSubmit(evt) {
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
        <div className="form-container">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Deck Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Deck Privacy:</Form.Label>
                    <Form.Select
                        type="text"
                        name="share"
                        checked={formData.share}
                        onChange={handleChange}
                    >
                        <option value={"private"}>Private</option>
                        <option value={"public"}>Public</option>
                    </Form.Select>
                </Form.Group>
                <br/>
                <button className="form-button" type="Submit">Create</button>
            </Form>
        </div>
        </>
    )
}