import { deleteCard } from '../../utilities/cards-api';
import './CardList.css';

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
        <div className="card-container">
            <div>
                <div style={{fontWeight: "bold"}}>Question:</div>
                <div>{card.question}</div>
                <br/>
                <div style={{fontWeight: "bold"}}>Answer: </div>
                <div>{card.answer}</div>
                <br/>
                <div>
                    {/* <button onClick={evt => {evt.preventDefault(); handleEdit(card)}}>edit</button> */}
                    <button className="delete-button" onClick={evt => {evt.preventDefault(); handleDelete(card)}}>Delete</button>
                </div>
            </div>
        </div>
        <br/>
        </>
    )
}