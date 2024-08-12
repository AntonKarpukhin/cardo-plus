import { Link } from 'react-router-dom';
import cn from 'classnames';
import { testof } from '../../utils/data';
import { HeaderAuthorization, LayoutMain } from '../../components';
import styles from './regional-selections-page.module.css';

const RegionalSelectionsPage = () => (
    <LayoutMain>
        <section className={styles.RegionalSelectionsPage}>
            <div className={styles.wrapper}>
                <HeaderAuthorization path="/profile" status="back" />
                <h2 className={styles.title}>Региональные отборы</h2>
                <p className={styles.subtitle}>
                    Регистрация открыта! Расписание Региональных этапов (Российская
                    Федерация) смотрите ниже:
                </p>
                <p className={styles.text}>{testof}</p>
            </div>
            <div className={styles.wrapperLink}>
                <Link className={cn(styles.link, styles.linkWhite)} to="/spectatorRegistration" type="button">
                    Стать
                    зрителем
                </Link>
                <Link className={cn(styles.link, styles.linkRed)} to="/regionalRegistration" type="button">
                    Стать
                    участником
                </Link>
            </div>
        </section>
    </LayoutMain>
);

export default RegionalSelectionsPage;
