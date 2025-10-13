import React from 'react';
import styles from '../styles/Main.module.css';

function ExperienceCard(props) {
    return (
        <div className={styles.experiencecard}>
            <div>
                <h2>{props.title}</h2>
                <div>
                    <span className={styles.company}>{props.company}</span>
                    <span className={styles.dates}>{props.dates}</span>
                </div>
                <ul>
                    <li>{props.point1}</li>
                    {(props.point2 != null) ? <li>{props.point2}</li> : null}
                    {(props.point3 != null) ? <li>{props.point3}</li> : null}
                </ul>
            </div>
        </div>
      );
}

export default ExperienceCard;