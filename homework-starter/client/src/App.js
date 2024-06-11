// client/src/App.js
import React from 'react';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import UserProfile from './components/UserProfile';

const App = () => {
  return (
    <div>
      <h1>Authentication App</h1>
      <RegisterForm />
      <LoginForm />
      <UserProfile />
    </div>
  );
};

export default App;
