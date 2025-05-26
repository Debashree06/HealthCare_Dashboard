import React from 'react';
import styles from './AnatomySection.module.css';
import anatomyIllustration from '../../assets/muscular-system-anatomy-human.webp';

const AnatomySection = () => {
  return (
    <div className={styles.anatomyContainer}>
      <div className={styles.anatomyContent}>

        
        <h1 className={styles.dashboardTitle}>Dashboard</h1>
        <span className={styles.thisWeekText}>
          <div className={styles.periodSelector}>
            This Week
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </span>


        <div className={styles.anatomyImageSection}>
          <div className={styles.zoomControls}>
            <button className={styles.zoomButton}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className={styles.anatomyImage}>
            <img
              src={anatomyIllustration}
              alt="Human Anatomy"
              className={styles.anatomyImg}
            />
            <div className={styles.healthIndicator} style={{ top: '25%', left: '45%' }}>
              <div className={`${styles.indicatorBadge} ${styles.healthy}`}>
                <span>Heart</span>
              </div>
            </div>


            <div className={styles.healthIndicator} style={{ top: '10%', left: '25%' }}>
              <div className={`${styles.indicatorBadge} ${styles.attention}`}>
                <span>Teeth</span>
              </div>
            </div>

            <div className={styles.healthIndicator} style={{ top: '65%', left: '35%' }}>
              <div className={`${styles.indicatorBadge} ${styles.healthy}`}>
                <span>Bone</span>
              </div>
            </div>


            <div className={styles.healthIndicator} style={{ top: '80%', left: '29%' }}>
              <div className={`${styles.indicatorBadge} ${styles.attention}`}>
                <span>Leg</span>
              </div>
            </div>
          </div>

        </div>

        <div className={styles.healthStatusCards}>
          <div className={styles.statusCard}>
            <div className={styles.statusIcon}>🫁</div>
            <div className={styles.statusInfo}>
              <h3>Lungs</h3>
              <div className={styles.statusDate}>Date: 26 Oct 2021</div>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '70%', backgroundColor: '#FF6B6B' }}></div>
              </div>
            </div>
          </div>

          <div className={styles.statusCard}>
            <div className={styles.statusIcon}>🦷</div>
            <div className={styles.statusInfo}>
              <h3>Teeth</h3>
              <div className={styles.statusDate}>Date: 26 Oct 2021</div>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '85%', backgroundColor: '#4ADE80' }}></div>
              </div>
            </div>
          </div>

          <div className={styles.statusCard}>
            <div className={styles.statusIcon}>🦴</div>
            <div className={styles.statusInfo}>
              <h3>Bone</h3>
              <div className={styles.statusDate}>Date: 26 Oct 2021</div>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '60%', backgroundColor: '#FF8F6B' }}></div>
              </div>
            </div>
          </div>


        </div>
      </div>

    </div>
  );
};

export default AnatomySection;