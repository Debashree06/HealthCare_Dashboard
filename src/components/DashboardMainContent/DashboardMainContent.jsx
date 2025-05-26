import React from 'react';
import styles from './DashboardMainContent.module.css';
import DashboardOverview from '../DashboardOverview/DashboardOverview';
import CalendarView from '../CalendarView/CalendarView';
import UpcomingSchedule from '../UpcomingSchedule/UpcomingSchedule';
import ActivityFeed from '../ActivityFeed/ActivityFeed';

const DashboardMainContent = () => {
  return (
    <div className={styles.dashboardMainContent}>
      <div className={styles.contentGrid}>
        <div className={styles.componentWrapper}>
          {/* <Header/> */}
          <DashboardOverview />
        </div>
        <div className={styles.componentWrapper}>
          <CalendarView />
        </div>
        <div className={styles.componentWrapper}>
          <ActivityFeed />
        </div>
        <div className={styles.componentWrapper}>
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;