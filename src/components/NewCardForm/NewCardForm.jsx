import { useParams } from "react-router-dom";
import { useState } from "react";
import * as deckAPI from '../../utilities/decks-api';

export default function NewCardForm() {

    let id = useParams().id;

    const [formData, setFormData] = useState({
        question: '',
        answer: '',
        deckId: id, //sets this to the current deckid
    });

    const [cards, setCards] = useState([]);

    const handleChange = (evt) => {
        setFormData({
        ...formData,
        [evt.target.name]: evt.target.value,
        });
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const newCard = await deckAPI.createCard(formData);
            setCards({...setCards, newCard});
            setFormData({
                question: '',
                answer: '',
                deckId: id
            })
        } catch {
            console.log('create card failed');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Question:</label>
                <input
                    type="text"
                    name="question"
                    value={formData.question}
                    onChange={handleChange}
                />
                <label>Answer:</label>
                <input
                    type="text"
                    name="answer"
                    value={formData.answer}
                    onChange={handleChange}
                />
                <button type='submit'>Add Card</button>
            </form>
        </>
    )
}