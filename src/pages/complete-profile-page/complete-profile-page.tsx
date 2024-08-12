import styles from './complete-profile-page.module.css';
import {
    Button, HeaderAuthorization, LayoutMain, Paragraph,
} from '../../components';

const CompleteProfilePage = () => (
    <LayoutMain>
        <section className={styles.CompleteProfilePage}>
            <HeaderAuthorization status="close" path="/" />
            <div className={styles.wrapperInfo}>
                <img className={styles.img} src="kardo_planet.png" alt="kardo-planet" />
                <div className={styles.wrapperTitle}>
                    <h2 className={styles.title}>Готово!</h2>
                    <Paragraph
                        className={styles.paragraph}
                        color="black"
                        text="Все этапы регистрации пройдены
                    На указанную почту направлено письмо с данными для входа."
                    />
                </div>
                <div className={styles.buttons}>
                    <Button color="red" text="Завершить" type="button" path="/" />
                </div>
            </div>
        </section>
    </LayoutMain>
);

export default CompleteProfilePage;
