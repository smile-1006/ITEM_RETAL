import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const res = await axios.post('/api/auth/register', { name, email, password });
        console.log('Registered:', res.data);
        } catch (err) {
        console.error('Error registering:', err.message);
        }
    };

    return (
        <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
                />
            <button type="submit">Register</button>
        </form>
        </div>
    );
}

export default Register;
