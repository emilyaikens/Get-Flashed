import {useState} from "react";
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({setUser}) {
    const [showSignUp, setShowSignUp] = useState(false);

    const loginMsg = "Already have an account?"
    return (
        <main>
            
            {showSignUp ?
                <SignUpForm setUser={setUser}/>
                :
                <LoginForm setUser={setUser}/>
            
            }
            <div>{showSignUp ? 'Already have an account?' : 'Dont have an account yet?'}</div>
            <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
        </main>
    );
}