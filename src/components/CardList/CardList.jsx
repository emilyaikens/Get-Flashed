import { deleteCard } from '../../utilities/cards-api';
import './CardList.css';

export default function CardList({card, setAddCard}) {

    //handleDelete deletes individual card and updates visible cards via dependency array in pages/ManageDeckPage

    async function handleDelete(thisCard) {
        try {
            await deleteCard(thisCard);
            setAddCard([1]); //used to refresh card list
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
                    <button className="delete-button" 
                        onClick={evt => {evt.preventDefault(); handleDelete(card)}}>Delete</button>
                </div>
            </div>
        </div>
        <br/>
        </>
    )
}