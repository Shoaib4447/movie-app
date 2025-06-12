function ListGroup() {
  const items = ["London", "Paris", "New YorK", "Tokyo", "San Francisco"];

  return (
    <>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>No Items Found</p> : null} */}
      {items.length === 0 && <p>No Items Found</p>}
      <ul className='list-group'>
        {items.map((item) => (
          <li key={item} className='list-group-item'>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
