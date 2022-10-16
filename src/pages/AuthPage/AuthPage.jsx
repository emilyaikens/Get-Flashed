import { useState } from "react";
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css'

export default function AuthPage({setUser}) {

    //use states below used to toggle between visible elements

    const [showSignUp, setShowSignUp] = useState(true);
    const [showLogIn, setShowLogIn] = useState(true);
    const [showLanding, setShowLanding] = useState(false);

    //button logic: when user clicks on a button, the use state is toggled between true and false
    //inverse relationship between login and sign up so that if one if showing the other will be hidden
    //cowbow image will only be visible if neither form is visible

    return (
        <main>
            {/* header is image, not h1 */}
            <img className="title" src="https://i.imgur.com/OHi2rSk.png" />
            <h5 style={{fontFamily:'Peralta', margin: 20}}>A questionably themed flashcard app</h5>
            <br/>
            <button className="form-button" onClick={() => {setShowSignUp(!showSignUp); 
                                    {showLanding ? setShowLanding(!showLanding): setShowLanding(showLanding)}; 
                                    {!showLogIn ? setShowLogIn(!showLogIn): setShowLogIn(showLogIn)}}}
                                    >Sign Up</button>
            <button className="form-button" onClick={() => {setShowLogIn(!showLogIn); 
                                    setShowLanding(!showLanding);
                                    {!showSignUp ? setShowSignUp(!showSignUp): setShowSignUp(showSignUp)}}}
                                    >Log In</button>
            <br/>
            {showSignUp ?
                <div></div>
                :
                <>
                <br/>
                <SignUpForm setUser={setUser}/>
                </>
            }
            {showLogIn ?
                <div></div>
                :
                <>
                <br/>
                <LoginForm setUser={setUser}/>
                </>
            }
            {!showLogIn || !showSignUp ?
                <div></div>
                :
                <>
                    <img className="cowboy" src="https://i.imgur.com/h9DRnp1.png" />
                </>
            }            
        </main>
    );
}