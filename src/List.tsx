function List() {

    const items = [
        '1',
        '2',
        '3',
        '4',
        '5'];

    
        
    return (
        <>
        <h1>List</h1>
            <ul className="list-group">
                {items.map(item => <li className = "list-group-item">{item}</li>)}
        </ul>
        </>
        
    )
}

export default List;