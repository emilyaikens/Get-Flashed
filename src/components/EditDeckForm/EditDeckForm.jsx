import { useState } from "react";
import { editDeck } from '../../utilities/decks-api';
import Form from 'react-bootstrap/Form';

export default function NewDeckForm({setDeckName, deckName, id}) {

    //useState keeps track of form inputs

    const [formData, setFormData] = useState({
        name: '',
        share: "private"
    });

    //handleChange updates formData useState with user input

    function handleChange(evt) {
        setFormData({
        ...formData,
        [evt.target.name]: evt.target.value,
        });
    };

    //handleSubmit sends user input (deck name) to backend, where deck name is updated in db
    //new deck name is sent to front-end and is used to update setDeckName useState (from App.js)

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const newDeckName = await editDeck(formData, id); 
            setDeckName(newDeckName.name);
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
                        placeholder={deckName}
                        onChange={handleChange}
                    >
                        <option value={"private"}>Private</option>
                        <option value={"public"}>Public</option>
                    </Form.Select>
                </Form.Group>
                <br/>
                <button className="form-button" type="Submit">Update Deck</button>
            </Form>
        </div>
        </>
    )
}