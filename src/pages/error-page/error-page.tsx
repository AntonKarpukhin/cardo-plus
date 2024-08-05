import { Link } from 'react-router-dom';
import styles from './error-pageю.module.css';

const ErrorPage = () => (
    <div className={styles.ErrorPage}>
        <h2 className={styles.title}>Ошибка загрузки</h2>
        <Link className={styles.link} to="/">Перейти на главную</Link>
    </div>
);

export default ErrorPage;
