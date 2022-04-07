import React, { useState } from 'react'
import axios from 'axios'
const Login = () =>{
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const loginEvent = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        axios.post('http://localhost:4000/login',{
            username,
            password
        },{
            withCredentials: true
        }) 
        .then((res) => {
            console.log(res.data)
            if(res.data === 'Login successfully'){
                alert('Login successfully!');
                // location.assign('http:/localhost:4000');
            }
        })
    }

    return <form onSubmit={loginEvent}>
        <input type="text" value={username} placeholder="username" onChange={event => setUsername(event.target.value)} />
        <input type="password" value={password} placeholder="password" onChange={event => setPassword(event.target.value)} />
        <button type='submit'>Login</button>
    </form>
}

export default Login