import React, { FC, useState, useEffect } from 'react';
import styles from './Header.module.css'
import logo from '../../assets/img/Logo.svg'
import cart from '../../assets/img/Cart.svg'
import { useAppSelector } from '../../hooks/redux';
import Hamburger from '../UI/Hamburger/Hamburger';

const Header:FC = () => {

    let [ quantity, setQuantity ] = useState('')
    const {cards} = useAppSelector(state => state.addCardSlice)
    let basketImg :HTMLElement
    let basket:HTMLElement

    const [size, setSize] = useState({});
    const ref = React.useRef<any | HTMLDivElement> (null);  

    // Function to change event listeners based on screen width
    const resizeHandler = () => {
        const { clientHeight, clientWidth } = ref.current;
        setSize({ clientHeight, clientWidth });
        if (clientWidth < 431 ) {
            basketImg.addEventListener('click',changeCart)
        }
        if (clientWidth > 430 ) {
            basketImg.removeEventListener('click',changeCart)   
        }
    };

    // Changing the number of items on the cart icon
    useEffect(() => {
        let cartQuantity = document.getElementById('cartQuantity')!
        if (cards.length !== 0) {
            cartQuantity.style.display = 'block'
            setQuantity('' + cards.length)
        } else {
            cartQuantity.style.display = 'none'
        }
    }, [cards])

    // Applying the overlay function of event listeners based on screen width
    useEffect(() => {
        basket = document.getElementById('basket')!
        basketImg = document.getElementById('basketImg')!
        window.addEventListener("resize", resizeHandler);
        resizeHandler();   
        return () => {
          window.removeEventListener("resize", resizeHandler);
          basketImg.removeEventListener('click',changeCart)
        };
      }, []);

    //   Function that shows or hides the shopping cart
    const changeCart = () => {
        let basket = document.getElementById('basket')!
        let cardList = document.getElementById('CardList')!
        basket.classList.toggle('display_flex')
        cardList.classList.toggle('display_none')
    }
    

    return (
        <header className={styles.header} id='tool' ref={ref}>
            <img src={logo} alt="Logo" width='89px' height='32px' />
            <div className={styles.header_btns_container}>
                <img id='basketImg' className={styles.header_cart} src={cart} alt="Cart" width='24px' height='21px' />
                <p id='cartQuantity' className={styles.header_cart_quantity}>{quantity}</p>
                <Hamburger changeCart={changeCart} />
            </div>
        </header>
    );
};

export default Header;