import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminPanel() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
        try {
            const res = await axios.get('/api/items');
            setItems(res.data.filter(item => !item.isApproved));
        } catch (err) {
            console.error('Error fetching items:', err.message);
        }
        };

        fetchItems();
    }, []);

    const approveItem = async (id) => {
        try {
        await axios.put(`/api/items/${id}/approve`);
        setItems(items.filter(item => item._id !== id));
        } catch (err) {
        console.error('Error approving item:', err.message);
        }
    };

    return (
        <div>
        <h1>Admin Panel</h1>
        <ul>
            {items.map((item) => (
            <li key={item._id}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
                <p>Owner: {item.owner.name}</p>
                <button onClick={() => approveItem(item._id)}>Approve</button>
            </li>
            ))}
        </ul>
        </div>
    );
}

export default AdminPanel;
