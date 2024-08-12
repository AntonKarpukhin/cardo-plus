import styles from './ribbon-page.module.css';
import { FooterAuthorization } from '../../components';

const RibbonPage = () => (
    <section className={styles.RibbonPage}>
        <img src="content.png" alt="Заставка" />
        <FooterAuthorization />
    </section>
);

export default RibbonPage;
