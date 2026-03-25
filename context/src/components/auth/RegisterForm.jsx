import React from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import RoleCard from '../ui/RoleCard';
import { Link } from 'react-router-dom';
import styles from './AuthForm.module.css';
import { GraduationCap, ShieldCheck } from 'lucide-react';

const RegisterForm = ({ register, errors, onSubmit, watch, setValue, isSubmitting }) => {
  const selectedRole = watch('role');

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Create an Account</h2>
      <p className={styles.subtitle}>
        Enter your professional details to get started.
      </p>

      <form onSubmit={onSubmit} className={styles.form}>
        <Input
          label="Full Name"
          placeholder="Dr. Julian Vanguard"
          error={errors.fullName}
          {...register('fullName')}
        />

        <Input
          label="Institutional Email"
          placeholder="j.vanguard@university.edu"
          error={errors.email}
          {...register('email')}
        />

        <div className="form-group mb-4">
          <label className="form-label">Role Selection</label>
          <div className={styles.roleGrid}>
            <RoleCard
              title="Student"
              description="Access courses & training"
              icon={<GraduationCap size={20} />}
              selected={selectedRole === 'student'}
              onClick={() => setValue('role', 'student', { shouldValidate: true })}
            />
            <RoleCard
              title="Admin"
              description="Manage institutional data"
              icon={<ShieldCheck size={20} />}
              selected={selectedRole === 'admin'}
              onClick={() => setValue('role', 'admin', { shouldValidate: true })}
            />
          </div>
          {errors.role && <span className="error-text">{errors.role.message}</span>}
        </div>

        <div className={styles.row}>
          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            error={errors.password}
            {...register('password')}
          />
          <Input
            label="Confirm Password"
            type="password"
            placeholder="••••••••"
            error={errors.confirmPassword}
            {...register('confirmPassword')}
          />
        </div>

        <Button type="submit" disabled={isSubmitting} className="mt-4">
          {isSubmitting ? 'REGISTERING...' : 'REGISTER ACCOUNT'}
        </Button>
      </form>

      <div className={styles.footer}>
        <p>Already have an account? <Link to="/login">Sign In</Link></p>
      </div>

      <div className={styles.legalFooter}>
        <p>BY REGISTERING, YOU AGREE TO OUR</p>
        <p><Link to="#">TERMS OF SERVICE</Link> AND <Link to="#">PRIVACY POLICY</Link></p>
      </div>
    </div>
  );
};

export default RegisterForm;
