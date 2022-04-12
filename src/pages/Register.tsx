import React, { useState } from 'react'
import axios from 'axios'
const Register = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const register = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log("abc")
        axios.post('http://localhost:4000/register',{
            username,
            password,
            name
        }) 
        .then((res) => {
            console.log(res)
        })
    }

    return <form onSubmit={register}>
        <input type="text" value={username} placeholder="username" onChange={event => setUsername(event.target.value)} />
        <input type="password" value={password} placeholder="password" onChange={event => setPassword(event.target.value)} />
        <input type="text" value={name} placeholder="name" onChange={event => setName(event.target.value)} />
        <button type="submit">Register</button>
    </form>
}

export default Register