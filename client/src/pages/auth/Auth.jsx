import  { useState } from 'react';
import './Auth.css';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [toRegister,setToRegister] = useState(true);

    const login = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    const signUp = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="login-container">
            <form className="login-form">
                <h2>{toRegister ? "Register" :"Login"}</h2>
                <div className="input-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" onClick = {toRegister ? signUp : login}>Login</button>
                {!toRegister ? <p>
                    Don&apos;t have an account? 
                    <span style= {{color: "blue",cursor: "pointer",marginLeft: "2px"}} onClick = {() => setToRegister(true)}>
                    Register
                    </span>
                </p>:
                <p>
                Already have an account? 
                <span style= {{color: "blue",cursor: "pointer",marginLeft: "2px"}} onClick = {() => setToRegister(false)}>
                 Login
                </span>
            </p>
                }
            </form>
        </div>
    );
};

export default Auth;
