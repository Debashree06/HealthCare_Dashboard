import React from 'react';
import styles from './SimpleAppointmentCard.module.css';

function SimpleAppointmentCard({ appointment }) {
  const IconComponent = appointment.icon;

  return (
    <div className={styles.simpleAppointmentCard}>
      <div className={styles.cardContent}>
        <span className={styles.title}>{appointment.title}</span>
        <span className={styles.time}>{appointment.time}</span>
      </div>
      <div className={`${styles.iconWrapper} ${styles[appointment.type]}`}>
        {IconComponent && <IconComponent />}
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;