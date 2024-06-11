// RegisterForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { register } from './api';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  username: yup.string().min(5, 'Username must be at least 5 characters').required('Username is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await register(data.email, data.password, data.username);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}
      
      <input {...register('username')} placeholder="Username" />
      {errors.username && <p>{errors.username.message}</p>}
      
      <input {...register('password')} placeholder="Password" type="password" />
      {errors.password && <p>{errors.password.message}</p>}
      
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;

// RegisterForm.js (продолжение)
const [loading, setLoading] = React.useState(false);
const [error, setError] = React.useState(null);

const onSubmit = async (data) => {
  setLoading(true);
  setError(null);
  try {
    const response = await register(data.email, data.password, data.username);
    console.log(response);
  } catch (error) {
    setError('Registration failed');
  } finally {
    setLoading(false);
  }
};

return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <input {...register('email')} placeholder="Email" />
    {errors.email && <p>{errors.email.message}</p>}
    
    <input {...register('username')} placeholder="Username" />
    {errors.username && <p>{errors.username.message}</p>}
    
    <input {...register('password')} placeholder="Password" type="password" />
    {errors.password && <p>{errors.password.message}</p>}
    
    <button type="submit" disabled={loading}>Register</button>
    {loading && <p>Loading...</p>}
    {error && <p>{error}</p>}
  </form>
);
