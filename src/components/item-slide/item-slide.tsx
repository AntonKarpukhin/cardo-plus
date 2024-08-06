import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './item-slide.module.css';
import { ItemSlideProps } from './item-slide.props';
import arrow from '../../../public/arrow-right.png';
import HeaderAuthorization from '../../components/header-authorization/header-authorization';

const ItemSlide: FC<ItemSlideProps> = ({
    image, title, description, link, status,
}) => (
    <div className={styles.itemSlide}>
        { status && <HeaderAuthorization status="back" path="/" skip="/home" /> }
        { !status && <HeaderAuthorization skip="/home" /> }
        <div className={styles.slide}>
            <img src={image} alt={title} className={styles.image} />
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
        </div>
        {link && (
            <Link to="/home" className={styles.link}>
                Начать
                <img src={arrow} alt="Arrow" className={styles.arrow} />
            </Link>
        )}
    </div>
);

export default ItemSlide;
