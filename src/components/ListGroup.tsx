function ListGroup() {
  const items = ["London", "Paris", "New YorK", "Tokyo", "San Francisco"];

  return (
    <>
      <h1>Hello World</h1>
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
