import React from "react";
import styles from "./UpcomingSchedule.module.css";

const UpcomingSchedule = () => {
  return (
    <div className={styles.scheduleContainer}>
      <h2 className={styles.title}>The Upcoming Schedule</h2>

      <div className={styles.scheduleGroup}>
        <h3 className={styles.dayTitle}>On Thursday</h3>
        <div className={styles.appointmentGridNew}>
          <div className={styles.appointmentCard}>
            <div className={styles.appointmentInfo}>
              <div className={styles.appointmentTitle}>
                Health checkup complete
                <span className={styles.icon}>💉</span>
              </div>
              <div className={styles.appointmentTime}>11:00 AM</div>
            </div>
          </div>

          <div className={styles.appointmentCard}>
            <div className={styles.appointmentInfo}>
              <div className={styles.appointmentTitle}>
                Ophthalmologist
                <span className={styles.icon}>👁️</span>
              </div>
              <div className={styles.appointmentTime}>14:00 PM</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scheduleGroup}>
        <h3 className={styles.dayTitle}>On Saturday</h3>
        <div className={styles.appointmentGridNew}>
          <div className={styles.appointmentCard}>
            <div className={styles.appointmentInfo}>
              <div className={styles.appointmentTitle}>
                Cardiologist
                <span className={styles.icon}>❤️</span>
              </div>
              <div className={styles.appointmentTime}>12:00 AM</div>
            </div>
          </div>

          <div className={styles.appointmentCard}>
            <div className={styles.appointmentInfo}>
              <div className={styles.appointmentTitle}>
                Neurologist
                <span className={styles.icon}>🧠</span>
              </div>
              <div className={styles.appointmentTime}>16:00 PM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
