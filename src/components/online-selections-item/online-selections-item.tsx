import cn from 'classnames';
import { OnlineSelectionsItemsProps } from './online-selections-item.props';
import styles from './online-selections-item.module.css';
import Button from '../button/button';

const OnlineSelectionsItem = ({
    selectionsItems, className, toggleModal, setModalText, ...props
}: OnlineSelectionsItemsProps) => {
    const handleButtonClick = (description: string) => {
        setModalText(description);
        toggleModal();
    };
    return (
        <div className={cn(styles.OnlineSelection, className)} {...props}>
            {selectionsItems.map((item) => (
                <div key={item.title} className={styles.wrapperSelections}>
                    <div className={styles.wrapperSelectionsDescription}>
                        <div key={item.title}>
                            <p className={item.status === 'completed' ? styles.completed : styles.waiting}>
                                {item.status === 'completed' ? 'Завершён' : 'В ожидании'}
                            </p>
                            <h2 className={styles.title}>{item.title}</h2>
                            <p className={styles.date}>
                                Начало:&nbsp;
                                {item.startDate}
                            </p>
                            <p className={styles.date}>
                                Конец:&nbsp;
                                {item.endDate}
                            </p>
                        </div>
                        <img src="/Kardo_planet_bw.svg" alt="планета" />
                    </div>
                    <Button
                        color="white"
                        className={styles.button}
                        text="Открыть задание"
                        type="button"
                        onClick={() => handleButtonClick(item.description)}
                    />
                </div>
            ))}

        </div>
    );
};

export default OnlineSelectionsItem;
