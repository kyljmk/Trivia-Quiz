import "./App.css";
import StartPage from "./StartPage";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [login, setLogin] = useState(false);
  const [users, setUsers] = useState([{}]);
  const [currentUser, setCurrentUser] = useState();
  const [questions, setQuestions] = useState({});

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=hard&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => console.log(data.results));
  }, []);

  const createUser = (name) => {
    setCurrentUser({
      id: nanoid(),
      name: name,
      score: 0,
    });
  };

  const toggleLogin = () => {
    setLogin((prevState) => !prevState);
  };

  /*const addUser = (name) => {
    setUsers([
      ...users,
      {
        id: nanoid(),
        name: name,
        score: 0,
      },
    ]);
  };*/

  return (
    <div className="App">
      {!login && (
        <StartPage createUser={createUser} toggleLogin={toggleLogin} />
      )}
      {login && <h1>{currentUser.name}</h1>}
    </div>
  );
}

export default App;
