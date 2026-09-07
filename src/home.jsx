import { useState, useEffect } from "react";

const Home = () => {
  const [user, setUsers] = useState([]);
  useEffect(() => {
    console.log("useEffect");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      <div>
        {user.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    </>
  );
};
export default Home;
