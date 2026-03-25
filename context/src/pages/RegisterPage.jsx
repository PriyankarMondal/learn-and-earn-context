import React from 'react';
import AuthLayout from '../components/layout/AuthLayout';
import RegisterContainer from '../containers/RegisterContainer';

const RegisterPage = () => {
  return (
    <AuthLayout>
      <RegisterContainer />
    </AuthLayout>
  );
};

export default RegisterPage;
