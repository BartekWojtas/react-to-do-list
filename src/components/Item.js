const Item = ({item, removeItem, packItem}) => {


    return ( 
        <li style={item.isPacked ? {textDecoration: "line-through"} : {}}>
            <input
                type="checkbox"
                value={item.isPacked}
                onChange={() => {packItem(item.id)}}
            />
            <span>
                {item.quantity} {item.description}
            </span>
            <button onClick={() => removeItem(item.id)} >❌</button>
        </li>
        );
};

export default Item;