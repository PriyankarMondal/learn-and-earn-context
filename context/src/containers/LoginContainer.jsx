import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/auth/LoginForm';

const LoginContainer = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = async (data) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Check localStorage credentials
    const users = JSON.parse(localStorage.getItem('vanguard_users') || '[]');
    const user = users.find(u => u.email === data.email && u.password === data.password);

    if (user) {
      // Record active user session
      localStorage.setItem('currentUser', JSON.stringify(user));
      navigate('/dashboard');
    } else {
      setError('email', { type: 'manual', message: 'Invalid credentials' });
      setError('password', { type: 'manual', message: 'Invalid credentials' });
    }
  };

  return (
    <LoginForm
      register={register}
      errors={errors}
      onSubmit={handleSubmit(onSubmit)}
      isSubmitting={isSubmitting}
    />
  );
};

export default LoginContainer;
