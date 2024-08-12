import { FC } from 'react';
import { Button, LayoutMain, Paragraph } from '../../components';
import styles from './home-page.module.css';

const HomePage: FC = () => (
    <LayoutMain>
        <div className={styles.HomePage}>
            <img className={styles.img} src="kardo_planet.png" alt="kardo-planet" />
            <Paragraph
                className={styles.paragraph}
                color="black"
                text="Первая международная премия за развитие уличной культуры и спорта"
            />
            <div className={styles.buttons}>
                <Button color="red" text="Зарегистрироваться" type="button" path="/createProfile" />
                <Button color="white" text="Войти" type="button" path="/login" />
            </div>
        </div>
    </LayoutMain>
);

export default HomePage;
