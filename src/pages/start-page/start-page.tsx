import { useEffect, useState } from 'react';
import SliderContainer from '../../containers/slider-container/slider-container';
import styles from './start-page.module.css';
import { LayoutMain } from '../../components';

const StartPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer); // Очистка таймера при размонтировании компонента
    }, []);

    return (

        <div className={styles.StartPage}>
            {isLoading && (
                <div className={styles.loading}>
                    <img className={styles.loading_logo} src="/logo.png" alt="лого" />
                    <h2 className={styles.loading_title}>Улицы. Искусство. Андеграунд.</h2>
                </div>
            )}
            {!isLoading && (
                <LayoutMain>
                    <SliderContainer />
                </LayoutMain>
            )}
        </div>

    );
};

export default StartPage;
