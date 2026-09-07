import { useState, useEffect } from "react";

const Effectt = () => {
  const [users, setUsers] = useState([]);
  const [number, setNumber] = useState(0);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
      res.json().then((data) => {
        setUsers(data);
      });
    });

    
  });

  return (
    <>
      <p>{number}</p>
      <input
        type="number"
        value={number}
        onChange={(event) => {
          setNumber(event.target.value);
        }}
      />
      {users.map((user) => (
        <p>{user.email}</p>
      ))}
    </>
  );
};

export default Effectt;
