function List(props) {

    return <ul>
    {
        props.data.map((el, listIndex) => { 
        return<li>{el} <button onClick={() => { props.removeDataWithIndex(listIndex)}}>X</button></li>
        })
    }
    </ul>
}

export default List;