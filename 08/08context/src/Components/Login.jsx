import React, { useState, useContext } from 'react';
import UserContext from '../Context/UserContext';

function Login() {
    const[username, setUsername] = useState("");
    const[pwd, setpwd] = useState("");

    const{setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username,pwd})
    }

    return (
        <div >
            <h2>Login</h2>
            <input 
            type='text' 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Username'/>
            &nbsp;&nbsp;&nbsp;
            <input 
            type='text' 
            value={pwd}
            onChange={(e) => setpwd(e.target.value)}
            placeholder='Password'/>
            &nbsp;&nbsp;&nbsp;
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
