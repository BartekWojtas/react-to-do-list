const Stats = ({count, itemPacked})  => {
    return (
        <footer className='stats'>
            <em>Wybrałeś {count} rzeczy, a spakowałeś {itemPacked} przedmiotów</em>
        </footer>
        );
}

export default Stats;