import {useState} from "react";
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({setUser}) {

    const [showSignUp, setShowSignUp] = useState(true);

    const authMessage = showSignUp ? 'Already have an account?' : 'No account yet?';

    return (
        <main>
            {showSignUp ?
                <div>hi</div>
                :
                <>
                <SignUpForm setUser={setUser}/>
                <LoginForm setUser={setUser}/>
                </>
            }
            <div>{authMessage}</div>
            <button onClick={() => setShowSignUp(!showSignUp)}>Log In</button>
            <button onClick={() => setShowSignUp(!showSignUp)}>Sign Up</button>
        </main>
    );
}