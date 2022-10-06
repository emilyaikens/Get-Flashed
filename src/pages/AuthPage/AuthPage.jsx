import {useState} from "react";
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({setUser}) {

    const [showSignUp, setShowSignUp] = useState(false);

    const authMessage = showSignUp ? 'Already have an account?' : 'No account yet?';

    return (
        <main>
            {showSignUp ?
                <SignUpForm setUser={setUser}/>
                :
                <LoginForm setUser={setUser}/>
            }
            <div>{authMessage}</div>
            <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
        </main>
    );
}