import cn from 'classnames';
import styles from './programs-card.module.css';
import { ProgramCardProps } from './programs-card.props';

const ProgramsCard = ({
    card, className, openPopup, ...props
}: ProgramCardProps) => {
    let img;

    if (card.title.includes('йоге')) {
        img = 'yo.svg';
    } else if (card.title.includes('РАЗГОН')) {
        img = 'razgon.svg';
    } else if (card.title.includes('живописи')) {
        img = 'srh.svg';
    } else {
        img = 'cardo-prog.svg';
    }

    const handleDataPopup = () => {
        openPopup({
            type: card.title.includes('КАРДО') ? 'cardo' : 'yog',
            title: card.title,
            date: card.date,
            location: card.location,
            direction: card.direction,
            description: card.popup,
        });
    };

    return (
        <button type="button" className={cn(styles.ProgramsCard, className)} {...props} onClick={handleDataPopup}>
            <div>
                <p className={styles.date}>{card.date}</p>
                <p className={styles.title}>{card.title}</p>
            </div>
            <div className={styles.wrapperLocation}>
                <div>
                    <p className={styles.location}>
                        <span className={styles.direction}>Локация:</span>
                        {card.location}
                    </p>
                    <p className={styles.direction}>{`Направление: ${card.direction}`}</p>
                </div>
                <img className={styles.img} src={img} alt="Логотип" />
            </div>
        </button>
    );
};

export default ProgramsCard;
