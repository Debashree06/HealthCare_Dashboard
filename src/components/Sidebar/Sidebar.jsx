import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import { navigationLinks } from '../../data/mockData';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button 
        className={styles.menuButton} 
        onClick={toggleSidebar}
        aria-label="Toggle menu"
      >
        <svg 
          className={styles.menuIcon} 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <div 
        className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ''}`}
        onClick={() => setIsOpen(false)}
      />

      <aside className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.logoContainer}>
          <span className={styles.logoText}>Healthcare.</span>
        </div>

        <nav className={styles.navigation}>
          <h3 className={styles.navHeading}>General</h3>
          <ul className={styles.navList}>
            {navigationLinks.map((link) => (
              <li key={link.id} className={`${styles.navItem} ${link.name === 'Dashboard' ? styles.active : ''}`}>
                <link.icon className={styles.navIcon} />
                <span className={styles.navText}>{link.name}</span>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;