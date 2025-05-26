import React from 'react';
import styles from './DashboardOverview.module.css';
import AnatomySection from '../AnatomySection/AnatomySection';
import { healthIndicators} from '../../data/mockData';
import Header from "../Header/Header"


function DashboardOverview() {
  return (
    <div className={styles.headerNew}>
      <Header/>
      <AnatomySection indicators={healthIndicators} />
    </div>
  );
}

export default DashboardOverview;