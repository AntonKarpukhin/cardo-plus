import { Link } from 'react-router-dom';
import styles from './not-found-page.module.css';

const NotFoundPage = () => (
    <div className={styles.NotFoundPage}>
        <h2 className={styles.title}>Такой страницы нет</h2>
        <Link className={styles.link} to="/">Перейти на главную</Link>
    </div>
);

export default NotFoundPage;
