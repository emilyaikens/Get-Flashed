import { useParams } from "react-router-dom";
import { useState } from "react";
import { createCard } from '../../utilities/cards-api';
import Form from 'react-bootstrap/Form';

export default function NewCardForm({setAddCard}) {

    let id = useParams().id;

    const [formData, setFormData] = useState({
        question: '',
        answer: '',
        deckId: id,
    });

    const [cards, setCards] = useState([]);

    const handleChange = (evt) => {
        setFormData({
        ...formData,
        [evt.target.name]: evt.target.value,
        });
    };

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const newCard = await createCard(formData);
            setCards({...setCards, newCard});
            setFormData({
                question: '',
                answer: '',
                deckId: id
            });
            setAddCard([1]); //updates usestate so that new card renders on page
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
}