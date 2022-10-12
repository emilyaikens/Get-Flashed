import { deleteCard } from '../../utilities/decks-api';

export default function CardList({card, setAddCard}) {

    // function handleEdit(id) {
    //     //edit function will go here
    //     console.log(id)
    // };

    // function handleDelete(thisCard) {
    //     try{
    //         //console.log(thisCard)
    //         deleteCard(thisCard);
    //         //setAddCard([0]); //should refresh list
    //     } catch {
    //         console.log('delete card failed')
    //     }
    // };

    return (
        <>
        <div>
            <div>Question: {card.question}</div>
            <div>Answer: {card.answer}</div>
        </div>
        {/* <div>
            <button onClick={evt => {evt.preventDefault(); handleEdit(card)}}>edit</button>
            <button onClick={evt => {evt.preventDefault(); handleDelete(card)}}>delete</button>
        </div> */}
        <br/>
        </>
    )
}