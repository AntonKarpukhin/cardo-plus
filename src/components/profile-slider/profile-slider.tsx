import cn from 'classnames';
import { Link } from 'react-router-dom';
import { ProfileSliderProps } from './profile-slider.props';
import styles from './profile-slider.module.css';

const ProfileSlider = ({ sliderItems, className, ...props }: ProfileSliderProps) => {
    const a = 10;
    return (
        <div className={cn(styles.ProfileSlider, className)} {...props}>
            {sliderItems.map((slider) => (
                <Link to={slider.link} className={styles.wrapperSlider} key={slider.name}>
                    <div className={styles.wrapperName}>
                        <p className={styles.name}>{slider.name}</p>
                        {slider.type === 'arrow' && <img src="arrow-slider.svg" alt="Стрелка" />}
                    </div>
                    <div>
                        {slider.progressBar && <img src="progressBar.svg" alt="Прогресс бар" />}
                        {slider.startDate && (
                            <>
                                <p className={styles.date}>
                                    Начало:
                                    {'\u00A0'}
                                    {slider.startDate}
                                </p>
                                <p className={styles.date}>
                                    Конец:
                                    {'\u00A0'}
                                    {slider.endDate}
                                </p>
                            </>
                        )}
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ProfileSlider;
