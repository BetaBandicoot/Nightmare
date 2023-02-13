import './App.css';
import { useState } from "react";

function App() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  }

  const handleClick = (e) => {
    window.alert("Well tough shit...");
  }

  const logoutClick = (e) => {
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      <div className="window">
        {isLoggedIn ?
          <div className="window2">
            <div className="label">Logged in as:</div>
            <div className="box">{username}</div>
            <div className="label">Password:</div>
            <div className="box">{password}</div>
            <button className="button2" onClick={logoutClick}>Logout</button>
          </div>
          :
          <form onSubmit={handleSubmit}>
            <h1 className="title">Login</h1>
            <div className="label">Username</div>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="label">Password</div>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className='btn'>
              <button type="submit">Login</button>
            </div>
            <div className="forgot" onClick={handleClick}>Forgot password?</div>
          </form>
        }
      </div>
    </div>
  );
}

export default App;
