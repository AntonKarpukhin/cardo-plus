import { Link } from 'react-router-dom';
import styles from './error-pageю.module.css';
import { LayoutMain } from '../../components';

const ErrorPage = () => (
    <LayoutMain>
        <div className={styles.ErrorPage}>
            <h2 className={styles.title}>Ошибка загрузки</h2>
            <Link className={styles.link} to="/">Перейти на главную</Link>
        </div>
    </LayoutMain>
);

export default ErrorPage;
