import { deleteCard } from '../../utilities/decks-api';

export default function CardList({card, setAddCard}) {

    function handleEdit(id) {
        //edit function will go here
        console.log(id)
    };

    function handleDelete(id) {
        try{
            deleteCard(id);
            setAddCard([0]); //should refresh list
        } catch {
            console.log('delete card failed')
        }
    };

    // function handleDelete(id) {
    //     try {
    //         deleteDeck(id);
    //         const updateDecks = decks.filter(function (decks) {
    //             return decks._id !== id;
    //         });
    //         setDecks(updateDecks);
    //         navigate('/');
    //     } catch {
    //         console.log('delete deck failed');
    //     }
    // };

    return (
        <>
        <div>
            <div>Question:</div>
            <div>{card.question}</div>
            <div>Answer:</div>
            <div>{card.answer}</div>
        </div>
        <div>
            <button onClick={evt => {evt.preventDefault(); handleEdit(card._id)}}>edit</button>
            <button onClick={evt => {evt.preventDefault(); handleDelete(card._id)}}>delete</button>
        </div>
        <br/>
        </>
    )
}