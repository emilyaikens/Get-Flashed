import { useParams } from "react-router-dom";
import { useState } from "react";
import { createCard } from '../../utilities/cards-api';
import Form from 'react-bootstrap/Form';

export default function NewCardForm({setAddCard}) {

    //grab id from the url parameters and assign to variable id

    let id = useParams().id;

    //this use state keeps track of form inputs

    const [formData, setFormData] = useState({
        question: '',
        answer: '',
        deckId: id,
    });

    //handleChange updates use state as user types in form

    const handleChange = (evt) => {
        setFormData({
        ...formData,
        [evt.target.name]: evt.target.value,
        });
    };

    //on form submit, send payload to back end and save to database
    //then reset formdata use state so that form "clears"

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const newCard = await createCard(formData);
            setFormData({
                question: '',
                answer: '',
                deckId: id
            });
            setAddCard([1]); //updates dep array in ManageDeckPage so user can see new card
        } catch {
            console.log('create card failed');
        }
    };

    return (
        <>
            <div className="form-container">
                <Form onSubmit={handleSubmit}>
                    <Form.Label>Question:</Form.Label>
                    <Form.Control
                        type="text"
                        name="question"
                        value={formData.question}
                        onChange={handleChange}
                    />
                    <br/>
                    <Form.Label>Answer:</Form.Label>
                    <Form.Control
                        type="text"
                        name="answer"
                        value={formData.answer}
                        onChange={handleChange}
                    />
                    <br/>
                    <button className="form-button" type='submit'>Add Card</button>
                </Form>
            </div>
        </>
    )
};