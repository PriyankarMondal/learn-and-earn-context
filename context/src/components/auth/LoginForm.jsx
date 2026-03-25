import React from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Checkbox from '../ui/Checkbox';
import { Link } from 'react-router-dom';
import styles from './AuthForm.module.css';

const LoginForm = ({ register, errors, onSubmit, isSubmitting }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Welcome Back</h2>
      <p className={styles.subtitle}>
        Please enter your credentials to access the vanguard dashboard.
      </p>

      <form onSubmit={onSubmit} className={styles.form}>
        <Input
          label="EMAIL ADDRESS"
          placeholder="scholar@vanguard.edu"
          error={errors.email}
          {...register('email')}
        />

        <div className={styles.passwordGroup}>
          <div className={styles.forgotPassword}>
            <Link to="#">FORGOT PASSWORD?</Link>
          </div>
          <Input
            label="PASSWORD"
            type="password"
            placeholder="••••••••••••"
            error={errors.password}
            {...register('password')}
          />
        </div>

        <div className={styles.actions}>
          <Checkbox
            label="Keep me logged in for 30 days"
            {...register('rememberMe')}
          />
        </div>

        <Button type="submit" disabled={isSubmitting} className="mt-4">
          {isSubmitting ? 'LOGGING IN...' : 'LOGIN TO DASHBOARD'}
        </Button>
      </form>

      <div className={styles.footer}>
        <p>Not a member of the vanguard? <Link to="/register">Request Access</Link></p>
      </div>

      <div className={styles.bottomLinks}>
        <Link to="#">PRIVACY POLICY</Link>
        <Link to="#">TERMS OF SERVICE</Link>
        <Link to="#">SUPPORT</Link>
      </div>
    </div>
  );
};

export default LoginForm;
