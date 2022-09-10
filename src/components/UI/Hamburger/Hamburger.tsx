import React, { FC } from 'react';
import styles from './Hamburger.module.css'

interface IHamburger {
    changeCart: () => void
}

const Hamburger:FC<IHamburger> = ({changeCart}) => {
    
    return (

                <div  className={styles.header_burger}>
                    <input id='toggle' className={styles.toggle} type="checkbox"></input>
                    <label  onClick={changeCart} htmlFor="toggle" className={styles.hamburger}>
                        <div className={styles.top_bun}></div>
                        <div className={styles.meat}></div>
                        <div className={styles.bottom_bun}></div>
                    </label>
                </div>
    );
};

export default Hamburger;