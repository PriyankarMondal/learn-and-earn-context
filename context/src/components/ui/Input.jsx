import React, { forwardRef } from 'react';
import styles from './Input.module.css';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

const Input = forwardRef(({ label, error, type = 'text', rightIcon, ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="form-group">
      {label && <label className="form-label">{label}</label>}
      <div className={styles.inputWrapper}>
        <input
          ref={ref}
          type={inputType}
          className={`${styles.input} ${error ? styles.inputError : ''}`}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            className={styles.iconButton}
            onClick={togglePassword}
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        )}
        {rightIcon && !isPassword && (
          <div className={styles.iconWrapper}>{rightIcon}</div>
        )}
      </div>
      {error && <span className="error-text">{error.message}</span>}
    </div>
  );
});

Input.displayName = 'Input';
export default Input;
