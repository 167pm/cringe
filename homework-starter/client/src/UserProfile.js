// UserProfile.js
import React from 'react';
import { getCurrentUser, logout } from './api';

const UserProfile = () => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const fetchUser = async () => {
      const userData = await getCurrentUser();
      setUser(userData);
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  return user ? (
    <div>
      <h1>Welcome, {user.username}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  ) : (
    <div>Please log in</div>
  );
};

export default UserProfile;
