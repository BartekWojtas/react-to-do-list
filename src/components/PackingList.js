import Item from './Item';
import { useState } from 'react';

const PackingList = ({ items, removeItem, packItem, clearList }) => {
    const [sortBy, setSortBy] = useState('quantity');

    let sortedItems;

    const sortItems = (sortBy) => {

        if (sortBy === 'quantity') {
            sortedItems = items.sort((a, b) => a.quantity - b.quantity);
        }
        else if (sortBy === 'description') {
            sortedItems = items.sort((a, b) => a.description.localeCompare(b.description));
        }
        else if (sortBy === 'isPacked') {
            sortedItems = items.sort((a, b) => Number(a.isPacked) - Number(b.isPacked));
        }
    }

    sortItems(sortBy);

    return (
        <div className='list'>
            <h3>Lista rzeczy do spakowania:</h3>
            <ul>
                {sortedItems.map((item) => (
                    <Item key={item.id} item={item} removeItem={removeItem} packItem={packItem}/>
                ))}
            </ul>
            <div className='actions'>
                <select onChange={(e) => {setSortBy(e.target.value)}}>
                    <option value='quantity' >Sortuj po ilości</option>
                    <option value='description'>Sortuj po nazwie</option>
                    <option value='isPacked'>Sortuj po statusie</option>
                </select>
                <button onClick={clearList}>Wyczyść listę</button>
            </div>
        </div>
    );
}
export default PackingList;