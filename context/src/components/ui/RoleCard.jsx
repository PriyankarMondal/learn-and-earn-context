import React from 'react';
import styles from './RoleCard.module.css';

const RoleCard = ({ title, description, icon, selected, onClick }) => {
  return (
    <div
      className={`${styles.card} ${selected ? styles.selected : ''}`}
      onClick={onClick}
    >
      <div className={styles.radio}>
        <div className={styles.radioInner} />
      </div>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default RoleCard;
