import React from 'react';
import AuthLayout from '../components/layout/AuthLayout';
import LoginContainer from '../containers/LoginContainer';

const LoginPage = () => {
  return (
    <AuthLayout>
      <LoginContainer />
    </AuthLayout>
  );
};

export default LoginPage;
