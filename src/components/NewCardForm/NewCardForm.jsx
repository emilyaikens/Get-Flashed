import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { createCard } from '../../utilities/cards-api';

export default function NewCardForm({setAddCard}) {

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
            setAddCard([1]); //updates usestate so that new card renders
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