
export default function CardList({card, index}) {

    function handleEdit(evt) {
        evt.preventDefault();
        alert("edit button")
    };

    function handleDelete(evt) {
        evt.preventDefault();
        alert("delete button")
    };

    return (
        <>
        <div>
            <div>Question:</div>
            <div>{card.question}</div>
            <div>Answer:</div>
            <div>{card.answer}</div>
        </div>
        <div>
            <button onClick={handleEdit}>edit</button>
            <button onClick={handleDelete}>delete</button>
        </div>
        <br/>
        </>
    )
}