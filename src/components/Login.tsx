import React from 'react';
import ReactDOM from "react-dom";
import { useState, useContext} from 'react';
import  UserContext  from '../context/UserContext'

const Login = () => {
    const { login } = useContext(UserContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const database = [
        {username: "admin",
        password: "admin"}
    ];

    const handleLogin = () => {
        const user = database.find((u) => u.username === username && u.password === password )
        if (!user) {
            console.log('invalid username or password')
        } else {
            login(username)
            console.log('logged in')
        }

    }




    return(
        <form onSubmit={(e) =>{
            e.preventDefault()
            handleLogin()
        }}>
            <label>
                <p>Username</p>
                <input
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <label>
                <p>Password</p>
            <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </label>
            <div>
                <button type='submit'>Login</button>
            </div>
        </form>


    )

}
export default Login
