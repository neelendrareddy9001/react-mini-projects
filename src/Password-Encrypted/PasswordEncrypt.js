import React, {useRef} from 'react'
import { decodeBase64 } from 'bcryptjs'
import { encodeBase64 } from 'bcryptjs'
import bcrypt from 'react-bcryptjs'

const PasswordEncrypt = () => {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const SignupForm = (e) => {
        e.preventDefault();
        const email = emailInputRef.current.value;
        const password = passwordInputRef.current.value;

        const hashPassword = bcrypt.hashSync(password, 10);

        // console.log(hashPassword);
        window.localStorage.setItem('login', JSON.stringify({email, hashPassword}))
    }
    const LoginForm = (e) => {

    }
    return (
        <form>
            <input 
                type="email"
                placeholder="email"
                ref={emailInputRef}
                style={{padding : '15px', borderRadius : '10px', margin: '10px'}}
            />
            <input 
                type="password"
                placeholder="password"
                ref={passwordInputRef}
                style={{padding : '15px', borderRadius : '10px', margin: '10px'}}
            />
            <button 
                type='submit' 
                onClick={(e) => SignupForm}
                style={{padding : '15px', borderRadius : '10px', margin : '10px'}}
                >
                Sign Up
            </button>
            <button 
                type='submit' 
                onClick={(e) => LoginForm}
                style={{padding : '15px', borderRadius : '10px', margin : '10px'}}
                >
                Login
            </button>
        </form>
    )
}

export default PasswordEncrypt