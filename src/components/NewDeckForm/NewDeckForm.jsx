import { useState } from "react";
import * as deckAPI from '../../utilities/decks-api';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

export default function NewDeckForm({setDeckName}) {

    //assign navigate variable using useNavigate from react-router-dom

    const navigate = useNavigate();

    //this use state keeps track of form inputs

    const [formData, setFormData] = useState({ 
        name: '',
        share: "private",
    });

    //handleChange updates use state as user types in form    

    function handleChange(evt) {
        setFormData({
        ...formData,
        [evt.target.name]: evt.target.value,
        });
    };

    //on form submit, send payload to back end and save to database
    //then update deck name use state (app.js) so it can be used
    //in managedeckpage

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const newDeck = await deckAPI.createDeck(formData);
            setDeckName(newDeck.name);
            navigate(`/managedeck/${newDeck._id}`); //sends user to ManageDeckPage
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