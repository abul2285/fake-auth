import { useEffect, useState } from 'react';
import { fetchProfile, login, logout } from './libs/users';
import './App.css';

function App() {
  const [isAuth, setIsAuth] = useState();
  useEffect(() => {
    fetchProfile().then(({ username }) => {
      setIsAuth(!!username);
    });
  }, [isAuth]);

  return (
    <div className='App'>
      {isAuth ? 'Authenticated' : 'Not Authenticated'}

      {isAuth ? (
        <button onClick={() => logout(setIsAuth)}>Logout</button>
      ) : (
        <button onClick={() => login(setIsAuth)}>Login</button>
      )}
    </div>
  );
}

export default App;
