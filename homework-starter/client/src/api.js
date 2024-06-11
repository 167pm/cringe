// api.js
export const login = async (email, password) => {
    const response = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    return response.json();
  };
  
  export const register = async (email, password, username) => {
    const response = await fetch('/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, username }),
    });
    return response.json();
  };
  
  export const getCurrentUser = async () => {
    const response = await fetch('/users/me', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    return response.json();
  };
  
  export const logout = async () => {
    const response = await fetch('/logout', {
      method: 'POST',
    });
    return response.json();
  };
  