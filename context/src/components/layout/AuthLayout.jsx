import React from 'react';
import styles from './AuthLayout.module.css';

const AuthLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      {/* Left Panel - Hero/Brand */}
      <div className={styles.heroPanel}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <div className={styles.logo}>
            {/* Using a placeholder since no specific SVG was provided */}
            <div className={styles.logoIcon}></div>
            <div className={styles.logoText}>
              <strong>DESUN ACADEMY</strong>
              <span>VANGUARD</span>
            </div>
          </div>
          
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              The Future of<br/>
              <span className={styles.highlight}>Intellectual<br/>Excellence.</span>
            </h1>
            <p className={styles.description}>
              Join a global network of scholars and administrators shaping the next generation of academic leadership through data-driven insight and collaborative growth.
            </p>
          </div>

          <div className={styles.statsContainer}>
            <div className={styles.statCard}>
              <div className={styles.icon}>🎓</div>
              <h3>12k+</h3>
              <p>ACTIVE SCHOLARS</p>
            </div>
            <div className={styles.statCard}>
              <div className={styles.icon}>🎖️</div>
              <h3>98%</h3>
              <p>PLACEMENT RATE</p>
            </div>
          </div>

          <div className={styles.footerText}>
            © 2024 Digital Scholar Academy. All rights reserved. Built for institutional rigor.
          </div>
        </div>
      </div>

      {/* Right Panel - Form Container */}
      <div className={styles.formPanel}>
        <div className={styles.formWrapper}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
