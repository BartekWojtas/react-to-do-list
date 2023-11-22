import Item from './Item';

const PackingList = ({ items, removeItem, packItem }) => {
    return (
        <div className='list'>
            <h3>Lista rzeczy do spakowania:</h3>
            <ul>
                {items.map((item, index) => (
                    <Item key={index} item={item} removeItem={removeItem} packItem={packItem}/>
                ))}
            </ul>
        </div>
    );
}
export default PackingList;