import React from 'react';
import styles from '../styles/TitleCard.module.css';

function TitleCard(props) {
    return (
        <div className={styles.titleCard}>
            <div>
                <h1>{props.text}</h1>
            </div>
        </div>
      );
}

export default TitleCard;