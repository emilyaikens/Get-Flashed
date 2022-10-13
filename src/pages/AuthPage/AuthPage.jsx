import {useState} from "react";
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({setUser}) {

    const [showSignUp, setShowSignUp] = useState(true);
    const [showLogIn, setShowLogIn] = useState(true);
    const [showLanding, setShowLanding] = useState(false);

    return (
        <main>
            <button onClick={() => {setShowSignUp(!showSignUp); setShowLanding(!showLanding)}}>Sign Up</button>
            <button onClick={() => {setShowLogIn(!showLogIn); setShowLanding(!showLanding)}}>Log In</button>
            {showSignUp ?
                <div></div>
                :
                <SignUpForm setUser={setUser}/>
            }
            {showLogIn ?
                <div></div>
                :
                <LoginForm setUser={setUser}/>
            }
            {showLanding ?
                <div></div>
                :
                <img src="https://i.imgur.com/h9DRnp1.png" />
            }
            {/* <button onClick={evt => {evt.preventDefault(); handleDelete(card)}}>delete</button> */}
            
        </main>
    );
}