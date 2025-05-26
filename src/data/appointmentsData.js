import { FaTooth, FaRunning } from 'react-icons/fa'; 

export const appointmentsData = {
    month: 'October',
    year: 2021,
    weekDays: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
    days: [
      { date: 25, appointments: ['10:00', '12:00', '13:00'] },
      { date: 26, appointments: ['10:00', '12:00', '13:00'] },
      { date: 27, appointments: ['08:00', '12:00', '13:00'],  isSelected: true },
      { date: 28, appointments: ['09:00', '11:00', '13:00'] },
      { date: 29, appointments: ['11:00', '14:00', '16:00'] },
      { date: 30, appointments: ['09:00', '13:00', '15:00'], isSelected: true },
      { date: 31, appointments: ['09:00', '10:00', '11:00'], isSelected: true },
    
    ],
    currentAppointments: [
      {
        id: 1,
        type: 'Dentist',
        time: '09:00-11:00',
        doctor: 'Dr. Cameron Williamson',
        icon: FaTooth
      },
      {
        id: 2,
        type: 'Physiotherapy Appointment',
        time: '11:00-12:00',
        doctor: 'Dr. Kevin Djones',
        icon: FaRunning
      },
    ]
  };