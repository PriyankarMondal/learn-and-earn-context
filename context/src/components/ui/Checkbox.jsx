import React, { forwardRef } from 'react';
import styles from './Checkbox.module.css';
import { Check } from 'lucide-react';

const Checkbox = forwardRef(({ label, ...props }, ref) => {
  return (
    <label className={styles.checkboxWrapper}>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          className={styles.hiddenCheckbox}
          ref={ref}
          {...props}
        />
        <div className={styles.styledCheckbox}>
          <Check size={14} className={styles.checkIcon} strokeWidth={3} />
        </div>
      </div>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
});

Checkbox.displayName = 'Checkbox';
export default Checkbox;
