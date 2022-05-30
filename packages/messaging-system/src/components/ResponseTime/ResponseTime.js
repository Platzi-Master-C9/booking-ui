import React from 'react';
import styles from './ResponseTime.module.scss'; 

export const ResponseTime = ({username = 'Laure Restrepo'}) => {
    
    return (
        <div className= {styles.frame}>
           <p className={styles.frameTimeline}><strong>{username}</strong> Tiempo de respuesta: en menos de una hora</p> 
        </div>
    );
}

export default ResponseTime;