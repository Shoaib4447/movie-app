import { MouseEvent } from "react";

function ListGroup() {
  const items = ["London", "Paris", "New YorK", "Tokyo", "San Francisco"];
  // Event Handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>No Items Found</p> : null} */}
      {items.length === 0 && <p>No Items Found</p>}
      <ul className='list-group'>
        {items.map((item) => (
          // onClick(()=>console.log(item))
          <li key={item} className='list-group-item' onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
