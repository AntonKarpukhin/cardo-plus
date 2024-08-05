import styles from './loading.module.css';

const Loading = () => (
    <div className={styles.wrapper}>
        <img className={styles.loading} src="loaderGif.gif" alt="Загрузка" />
    </div>
);

export default Loading;
