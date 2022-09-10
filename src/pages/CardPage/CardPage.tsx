import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import styles from './CardPage.module.css'
import db from '../../assets/db.json'
import { ICard } from '../../types/ICard';
import ReturnButton from '../../components/UI/ReturnButton/ReturnButton';
import Cart from '../../components/UI/Cart/Cart';

const CardPage:FC = () => {

    const params = useParams()

    return (
        <div id='CardList' className={styles.CardPage}>
            {
                db.products.filter((card:ICard) => card.id == params.id).map((card:ICard) => {
                    return (
                        <div className={styles.CardPage_container}  key={card.id} >
                            <ReturnButton />
                            <img  className={styles.CardPage_image} src={require(`../../assets/img/sneakers${card.id}.png`)} alt='sneakers' />
                            <h2 className={styles.Cart_data_name}>{card.name}</h2>
                            <p className={styles.Cart_data_modelNumber}>Item model number: {card.modelNumber}</p>
                            <div className={styles.Cart_data_container}>
                                <Cart id={card.id} name={card.name} image={card.image} price={card.price} />
                                <p className={styles.Cart_data_price}>$ {card.price?.toLocaleString('ru')}</p>
                            </div>
                        </div>
                    )
                }) 
            }
        </div>
    );
};

export default CardPage;