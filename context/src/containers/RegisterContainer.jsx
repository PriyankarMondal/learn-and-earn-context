import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../components/auth/RegisterForm';

const RegisterContainer = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      role: 'student',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      setError('confirmPassword', {
        type: 'manual',
        message: 'Passwords do not match',
      });
      return;
    }

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    // Save user credentials to localStorage
    const users = JSON.parse(localStorage.getItem('vanguard_users') || '[]');
    if (users.find(u => u.email === data.email)) {
       setError('email', { type: 'manual', message: 'Email already exists' });
       return;
    }
    
    users.push({
      email: data.email,
      password: data.password, // In a real app never store plaintext passwords
      fullName: data.fullName,
      role: data.role
    });
    localStorage.setItem('vanguard_users', JSON.stringify(users));

    // Redirect to login
    navigate('/login');
  };

  return (
    <RegisterForm
      register={register}
      errors={errors}
      onSubmit={handleSubmit(onSubmit)}
      watch={watch}
      setValue={setValue}
      isSubmitting={isSubmitting}
    />
  );
};

export default RegisterContainer;
