import React, { FC } from 'react';
import { ICard } from '../../types/ICard';
import styles from './CardItem.module.css'
import { Link } from 'react-router-dom';
import Cart from '../UI/Cart/Cart';




const CardItem:FC<ICard> = ({ id, name, image, price}) => {

    return (
        <div className={styles.Card}>
            
                {
                    image && <Link to={`${id}`} ><img src={require(`../../assets/img/sneakers${id}.png`)} alt='sneakers' width='228px' height='130px' /></Link>
                }  
                <h2 className={styles.Card_name}>{name}</h2>
                <div className={styles.Card_data_container}>
                    <Cart id={id} name={name} image={image} price={price} />
                    <p className={styles.Card_data_price}>$ {price?.toLocaleString('ru')}</p>
                </div>
               
        </div>
    );
};

export default CardItem;