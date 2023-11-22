import React from 'react';

import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';
import initialItems from './data/mockdata';

import { useState } from 'react';

function App() {
    const [items, setItems] = useState(initialItems);
    const itemsCount = items.length;
    const itemPacked = items.filter(item => item.isPacked).length;

    const addItem = (item) => {
        const newItems = [item, ...items];
        setItems(newItems);
    }

    const removeItem = (id) => {
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);
    }

    const packItem = (id) => {
        const updatedItems = items.map(item => {
            if (item.id === id) {
                return { ...item, isPacked: !item.isPacked }
            }
            return item;
        });
        setItems(updatedItems);
    }

    const clearList = () => {
        setItems([]);
    }

    return (
        <div className="app">
            <Logo />
            <Form addItem={addItem}/>
            <PackingList items={items} removeItem={removeItem} packItem={packItem} clearList={clearList}/>
            <Stats count={itemsCount} itemPacked={itemPacked}/>
        </div>
    );
}

export default App;
