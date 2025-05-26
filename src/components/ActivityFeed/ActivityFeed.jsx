import React from 'react';
import styles from './ActivityFeed.module.css';

const ActivityFeed = () => {
  const activityData = [
    { day: 'Mon', completed: 60, scheduled: 40 },
    { day: 'Tues', completed: 80, scheduled: 30 },
    { day: 'Wed', completed: 40, scheduled: 70 },
    { day: 'Thurs', completed: 70, scheduled: 50 },
    { day: 'Fri', completed: 50, scheduled: 60 },
    { day: 'Sat', completed: 30, scheduled: 40 },
    { day: 'Sun', completed: 45, scheduled: 55 }
  ];

  return (
    <div className={styles.activityContainer}>
      <div className={styles.activityHeader}>
        <h3 className={styles.title}>Activity</h3>
        <div className={styles.appointmentCount}>
          3 appointment on this week
        </div>
      </div>

      <div className={styles.graphContainer}>
        {activityData.map((data, index) => (
          <div key={index} className={styles.dayColumn}>
            <div className={styles.barsContainer}>
              <div 
                className={`${styles.bar} ${styles.scheduledBar}`}
                style={{ height: `${data.scheduled}%` }}
              />
              <div 
                className={`${styles.bar} ${styles.completedBar}`}
                style={{ height: `${data.completed}%` }}
              />
            </div>
            <div className={styles.dayLabel}>{data.day}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;