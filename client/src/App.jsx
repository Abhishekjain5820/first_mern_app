import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import TextField from '@mui/material/TextField';


function App() {
  const [listOfUsers,setListOfUsers]=useState([]);
  const [name,setName]=useState('');
  const [age,setAge]=useState(0);
  const [username,setUsername]=useState('');

  useEffect(()=>{
    axios.get("http://localhost:3001/getUsers").then((res)=>{
      setListOfUsers(res.data)
    })

  },[]);

  const createUser = () => {
    axios.post("http://localhost:3001/createUser", {
      name,
      age,
      username,
    }).then((response) => {
      setListOfUsers([
        ...listOfUsers,
        {
          name,
          age,
          username,
        },
      ]);
    });
  };
  return (
    <div className="App">
      <div className="usersDisplay">
        {listOfUsers.map((user) => {
          return (
            <div>
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <h1>Username: {user.username}</h1>
            </div>
          );
        })}
      </div>

      <div>
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Age..."
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button onClick={createUser}> Create User </button>
      </div>
    </div>
  );
}

export default App;
