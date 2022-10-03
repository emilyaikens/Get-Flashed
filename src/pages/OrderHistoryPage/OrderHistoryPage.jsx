import {checkToken} from "../../utilities/users-service";

export default function OrderHistoryPage() {
    async function handleCheckToken() {
        // calling checkToken from service layer
        const expDate = await checkToken();
        console.log(`expDate is ${expDate}`);
    }

    return (
        <>
            <h1>OrderHistoryPage</h1>
            <button onClick={handleCheckToken}>Check When My Login Expires</button>
        </>
    );
}