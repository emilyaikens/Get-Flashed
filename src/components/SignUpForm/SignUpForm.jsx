import { signUp } from "../../utilities/users-service";
import { useState } from "react";
import Form from 'react-bootstrap/Form';

export default function SignUpForm({ setUser}) {

    //this use state keeps track of form inputs

    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
        confirm: "",
        error: "",
    });

    //handleChange updates use state as user types in form

    const handleChange = (evt) => {
        setState({
        ...state,
        [evt.target.name]: evt.target.value,
        error: "",
        });
    };

    //on submit, update formData use state then send payload 
    //to back end and save user to database.
    // Update setUser use state (in app.js) with new user

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const formData = { ...state };
            delete formData.confirm;
            delete formData.error;
            const user = await signUp(formData);
            setUser(user);
        } catch {
            setState({
                error: "Sign Up Failed - Try Again",
            });
        }
    };

    //this variable is used to disable submit button if the
    //two passwords entered into the form do not match

    const disable = state.password !== state.confirm;

    return (
        <div>
        <div className="form-container">
            <Form autoComplete="off" onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={state.name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        name="email"
                        value={state.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={state.password}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Confirm</Form.Label>
                    <Form.Control
                        type="password"
                        name="confirm"
                        value={state.confirm}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <button className="form-button" type="submit" disabled={disable}>
                    SIGN UP
                </button>
            </Form>
        </div>
        <p className="error-message">&nbsp;{state.error}</p>
        </div>
    );
};
