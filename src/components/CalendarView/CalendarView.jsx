import React from 'react';
import styles from './CalendarView.module.css';
import { appointmentsData } from '../../data/appointmentsData';
import userImage from '../../assets/user.png';
import { FaStethoscope, FaRunning } from 'react-icons/fa';

const CalendarView = () => {


  return (
    <div className={styles.calendarContainer}>
      <div className={styles.rightSection}>
        <div className={styles.userActions}>
          <button className={styles.avatarButton}>
            <img src={userImage} alt="User" className={styles.avatar} />
          </button>
          <button className={styles.addButton}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 5v14M5 12h14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className={styles.calendarHeader}>
        <div className={styles.monthNavigation}>
          <button className={styles.navButton} aria-label="Previous month">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <h2 className={styles.monthYear}>{`${appointmentsData.month} ${appointmentsData.year}`}</h2>
          <button className={styles.navButton} aria-label="Next month">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className={styles.weekDays}>
        {appointmentsData.weekDays.map((day, index) => (
          <div key={day} className={styles.weekDay}>
            {day}
            <span>{appointmentsData.days[index].date}</span>
          </div>
        ))}
      </div>

      <div className={styles.calendarGrid}>
        {appointmentsData.days.map((day, index) => (
          <div key={index} className={`${styles.dayCell} ${day.isSelected ? styles.selectedDay : ''}`}>
            {day.appointments.map((time, timeIndex) => (
              <span
                key={timeIndex}
                className={`${styles.time} ${day.isSelected ? styles.selectedTime : ''}`}
              >
                {time}
              </span>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.appointmentDetails}>
        {appointmentsData.currentAppointments.map((appointment) => (
          <div
            key={appointment.id}
            className={`${styles.appointmentCard} ${appointment.type === 'Dentist' ? styles.dentistCard : styles.physioCard
              }`}
          >
            <div className={`${styles.appointmentIcon} ${appointment.type === 'Dentist' ? styles.dentistIcon : styles.physioIcon
              }`}>
              {appointment.type === 'Dentist' ? <FaStethoscope /> : <FaRunning />}
            </div>
            <div className={styles.appointmentInfo}>
              <span className={styles.appointmentTitle}>{appointment.type}</span>
              <span className={styles.appointmentTime}>{appointment.time}</span>
              <span className={styles.appointmentDoctor}>{appointment.doctor}</span>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default CalendarView;
