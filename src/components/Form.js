import React, { useState } from 'react';

const Form = ({addItem}) => {

    const [id, setId] = useState(1);
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [isPacked, setIsPacked] = useState(false);
    const options = [];
    
    for (let i = 1; i <= 100; i++) {
        options.push(<option key={i} value={i}>{i}</option>);
    }

    const handleCLick = (e) => {
        e.preventDefault();
        if (!description.trim()) {
            alert('Musisz wpisać nazwę przedmiotu');
            return;
        }
        const item = {
            id: id,
            description: description,
            quantity: quantity,
            isPacked: isPacked
        }
        addItem(item);
        setId(id + 1);
        setDescription('');
    }

    return (
        <form className="add-form">
            <h3>Co chcesz zabrać na tą wycieczkę?</h3>
                <select value={quantity} onChange={(e) => {setQuantity(e.target.value)}}>
                    {options}
                </select>
                <input type="text" placeholder="Nazwa" value={description} onChange={(e) => {setDescription(e.target.value)}}/>
                <button onClick={handleCLick}>Dodaj</button>
        </form>
        );
}

export default Form;