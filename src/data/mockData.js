import { FiGrid, FiClock, FiCalendar, FiUsers, FiBarChart2, FiBook, FiMessageSquare, FiLifeBuoy, FiSettings } from 'react-icons/fi';
import { FaHeart, FaLungs, FaTooth, FaBone, FaRunning } from 'react-icons/fa'; 

export const navigationLinks = [
  { id: 1, name: 'Dashboard', icon: FiGrid },
  { id: 2, name: 'History', icon: FiClock },
  { id: 3, name: 'Calendar', icon: FiCalendar },
  { id: 4, name: 'Appointments', icon: FiUsers },
  { id: 5, name: 'Statistics', icon: FiBarChart2 },
  { id: 6, name: 'Tests', icon: FiBook },
  { id: 7, name: 'Chat', icon: FiMessageSquare },
  { id: 8, name: 'Support', icon: FiLifeBuoy },
  { id: 9, name: 'Setting', icon: FiSettings },
];

export const healthIndicators = [
  { id: 1, name: 'Healthy Heart', status: 'healthy', icon: FaHeart, positionClass: 'heart' },
  { id: 2, name: 'Healthy Leg', status: 'healthy', icon: null, positionClass: 'leg' },
  { id: 3, name: 'Teeth', status: 'healthy', icon: FaTooth, positionClass: 'teeth' },
  { id: 4, name: 'Bone', status: 'issue', icon: FaBone, positionClass: 'bone' },
];

export const healthStatusCards = [
  { id: 1, name: 'Lungs', status: 'issue', date: '28 Oct 2021', icon: FaLungs },
  { id: 2, name: 'Teeth', status: 'healthy', date: '28 Oct 2021', icon: FaTooth },
  { id: 3, name: 'Bone', status: 'issue', date: '28 Oct 2021', icon: FaBone },
];

