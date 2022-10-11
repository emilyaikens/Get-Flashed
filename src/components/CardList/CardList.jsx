
export default function CardList({card, index}) {

//const [index, setIndex] = useState(0);

    return (
        <>
        {card.question}
        <br/>
        <button>Flip</button>
        </>
    )
}