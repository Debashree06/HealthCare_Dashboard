import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appContainer}>
      <Sidebar />
      <div className={styles.mainContentArea}>
        <DashboardMainContent />
      </div>
    </div>
  );
}
export default App;