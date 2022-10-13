import { deleteCard } from '../../utilities/cards-api';

export default function CardList({card, setAddCard, cards, setCards}) {

    // function handleEdit(id) {
    //     //edit function will go here
    //     console.log(id)
    // };

    const handleDelete = async (thisCard) => {
        try {
            await deleteCard(thisCard);
            setAddCard([1]); //should refresh list
        } catch {
            console.log('delete card failed')
        }
    };

    return (
        <>
        <div>
            <div>Question: {card.question}</div>
            <div>Answer: {card.answer}</div>
        </div>
        <div>
            {/* <button onClick={evt => {evt.preventDefault(); handleEdit(card)}}>edit</button> */}
            <button onClick={evt => {evt.preventDefault(); handleDelete(card)}}>delete</button>
        </div>
        <br/>
        </>
    )
}