import { useEffect, useState } from 'react';
import { CountTimerProps } from './count-timer.props';
import styles from './count-timer.module.css';

const CountdownTimer = ({ targetDate }: CountTimerProps) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = {
                days: 0, hours: 0, minutes: 0, seconds: 0,
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className={styles.CountdownTimer}>
            <div className={styles.wrapperTimeRed}>
                <p className={styles.timeRed}>{timeLeft.days}</p>
                <p className={styles.timesubtitleRed}>дня</p>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.wrapperTime}>
                    <p className={styles.time}>{String(timeLeft.hours).padStart(2, '0')}</p>
                    <p className={styles.timesubtitle}>часов</p>
                </div>
                <p className={styles.dots}>:</p>
                <div className={styles.wrapperTime}>
                    <p className={styles.time}>{String(timeLeft.minutes).padStart(2, '0')}</p>
                    <p className={styles.timesubtitle}>минут</p>
                </div>
                <p className={styles.dots}>:</p>
                <div className={styles.wrapperTime}>
                    <p className={styles.time}>{String(timeLeft.seconds).padStart(2, '0')}</p>
                    <p className={styles.timesubtitle}>секунд</p>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;
