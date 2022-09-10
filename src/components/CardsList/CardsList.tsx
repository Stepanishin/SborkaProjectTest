import React, { FC } from 'react';
import styles from './CardsList.module.css'
import db from '../../assets/db.json'
import { ICard } from '../../types/ICard';
import CardItem from '../CardItem/CardItem';

const CardsList:FC = () => {

    return (
            <section id='CardList' className={styles.CardsList}>
                {
                    db.products.map((card:ICard) => {
                        return (
                            <CardItem 
                                key={card.id}
                                id={card.id}
                                name={card.name}
                                image={card.image}
                                price={card.price}
                            />
                        )
                    })
                }
            </section>
    );
};

export default CardsList;