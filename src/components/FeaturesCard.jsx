import React from "react";

import styles from "../styles/Global";

const FeaturesCard = ({ iconText, iconUrl }) => {
  return (
    <div className={styles.featureCard}>
      <img src={iconUrl} alt="icon" className={styles.featureImg} />
      <p className={styles.featureText}>{iconText}</p>
    </div>
  );
};

export default FeaturesCard;
