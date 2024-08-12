import cn from 'classnames';
import { Link } from 'react-router-dom';
import styles from './programs-popup.module.css';
import { ProgramsPopupProps } from './programs-popup.props';

const ProgramsPopup = ({
    type, title, date, direction, location, description, className, closePopup, ...props
}: ProgramsPopupProps) => (
    <div className={cn(styles.ProgramsPopup, className)} {...props}>
        <div className={styles.wrapperTitle}>
            <p className={styles.title}>{title}</p>
            <button className={styles.close} type="button" onClick={closePopup}><img src="close.svg" alt="Закрыть" /></button>
        </div>
        <p className={styles.date}>{date}</p>
        <p className={styles.location}>
            <span className={styles.span}>Локация: </span>
            {location}
        </p>
        <p className={styles.direction}>{`Направление: ${direction}`}</p>
        <p className={styles.description}>{description}</p>
        <div className={styles.wrapperButton}>
            {type === 'yog' ? (
                <Link to="/spectatorRegistration" className={styles.link}>
                    Хочу прийти
                </Link>
            ) : <button className={styles.link} type="button">Смотреть трансляцию</button>}
        </div>
    </div>
);

export default ProgramsPopup;
