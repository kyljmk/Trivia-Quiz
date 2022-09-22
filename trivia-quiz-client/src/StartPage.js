import { useState } from "react";

function StartPage({ createUser, toggleLogin }) {
  const [userName, setUserName] = useState("");

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    createUser(userName);
    setUserName("");
    toggleLogin();
  }

  return (
    <div className="startpage">
      <h1 className="startpage--title">this is trivia.</h1>
      <h3 className="startpage--subtitle">enter your name and let's begin.</h3>
      <form className="startpage--form" onSubmit={handleSubmit}>
        <input
          className="startpage--form--input"
          type="text"
          name="username"
          value={userName}
          onChange={handleChange}
          autoComplete="off"
        ></input>
        <button type="submit" className="startpage--form--button">
          Start
        </button>
      </form>
    </div>
  );
}

export default StartPage;
