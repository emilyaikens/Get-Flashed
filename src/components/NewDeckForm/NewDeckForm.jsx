import { useState } from "react";

export default function NewDeckForm() {
    //create new deck that belongs to this user
    //once form is created, redirect to the "manage deck" page
    //so that user can add cards to the deck

    const [state, setState] = useState({
        name: "",
        error: "",
    });

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const formData = { ...state };
            delete formData.error;
            // const deck = await createDeck(formData);
            alert("button clicked")
        } catch {
            setState({
                error: "Sign Up Failed - Try Again",
            });
        }
    };

    const handleChange = (evt) => {
        setState({
        ...state,
        [evt.target.name]: evt.target.value,
        error: "",
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Deck Name</label>
                <input
                    type="text"
                    name="name"
                    value={state.name}
                    onChange={handleChange}
                />
                {/* add checkbox for public later */}
                <button type="Submit">Create</button>
            </form>
        </>
    )
}