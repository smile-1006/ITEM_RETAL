import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ItemList() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
        try {
            const res = await axios.get('/api/items');
            setItems(res.data);
        } catch (err) {
            console.error('Error fetching items:', err.message);
        }
        };

        fetchItems();
    }, []);

    return (
        <div>
        <h1>Items for Rent</h1>
        <ul>
            {items.map((item) => (
            <li key={item._id}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
                <p>Owner: {item.owner.name}</p>
            </li>
            ))}
        </ul>
        </div>
    );
    }

export default ItemList;
