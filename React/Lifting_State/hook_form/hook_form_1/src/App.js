import { useState } from 'react';
import './App.css';
import UserForm from './components/Form';
import UserView from './components/View';

function App() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div className="App">
      <UserForm user={user} setUser={setUser} />
      <UserView user={user} />
    </div>
  );
}

export default App;