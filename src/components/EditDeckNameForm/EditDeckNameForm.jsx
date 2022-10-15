import { useState } from "react";
import * as deckAPI from '../../utilities/decks-api';
import Form from 'react-bootstrap/Form';

export default function NewDeckForm({setDeckName, deckName, id}) {

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
        <div className="form-container">
            <Form onSubmit={handleSubmit}>
                <Form.Label>Deck Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder={deckName}
                    onChange={handleChange}
                />
                <br/>
                <button className="form-button" type="Submit">Update Deck Name</button>
            </Form>
        </div>
        </>
    )
}