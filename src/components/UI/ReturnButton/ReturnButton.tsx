import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ReturnButton.module.css'

const ReturnButton = () => {
    return (
        <Link to={'./../'} className={styles.ReturnButton} >Back in catalog</Link>
    );
};

export default ReturnButton;