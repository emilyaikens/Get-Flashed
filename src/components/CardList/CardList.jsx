
export default function CardList({card, index}) {

    return (
        <>
        <div>Question:</div>
        <div>{card.question}</div>
        <div>Answer:</div>
        <div>{card.answer}</div>
        <br/>
        </>
    )
}