import {useState} from 'react';
import * as usersService from '../../utilities/users-service';
import Form from 'react-bootstrap/Form';

export default function LoginForm({setUser}) {

    //useState keeps track of form inputs

    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');

    //update the use state as user types in form

    function handleChange(evt) {
        setCredentials({...credentials, [evt.target.name]: evt.target.value});
        setError('');
    }

    // on submit call the API endpoint and setUser state
    // The promise returned by the signUp service method
    // will resolve to the user object included in the
    // payload of the JSON Web Token (JWT)

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const user = await usersService.login(credentials);
            setUser(user);
        } catch {
            setError('Log In Failed - Try Again');
        }
    }

    return (
        <div>
            <div className="form-container">
                <Form autoComplete="off" onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" 
                                        name="email" 
                                        value={credentials.email} 
                                        onChange={handleChange} 
                                        required/>
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" 
                                        name="password" 
                                        value={credentials.password} 
                                        onChange={handleChange}
                                        required/>
                    </Form.Group>
                    <br/>
                    <button className="form-button" type="submit">LOG IN</button>
                </Form>
            </div>
            <p className="error-message">&nbsp;{error}</p>
        </div>
    );
}