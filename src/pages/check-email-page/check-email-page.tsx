import React from 'react';

import {
    Headlining, Paragraph, HeaderAuthorization, Button,
} from '../../components';
import styles from './check-email-page.module.css';

const CheckEmailPage = () => (
    <section className={styles.section}>
        <div>
            <HeaderAuthorization status="back" path="/login" />
            <Headlining className={styles.header} appearance="authorization" text="Проверьте почту" />
            <Paragraph
                className={styles.paragraph}
                color="gray"
                text="Мы отправили на вашу почту ссылку для сброса пароля."
            />
        </div>
        <Button className={styles.button} path="/login" color="red" type="button" text="Перейти к авторизации" />
    </section>
);

export default CheckEmailPage;
