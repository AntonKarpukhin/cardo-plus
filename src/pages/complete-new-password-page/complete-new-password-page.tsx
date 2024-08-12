import React from 'react';

import {
    Headlining, Paragraph, HeaderAuthorization, Button, LayoutMain,
} from '../../components';
import styles from './complete-new-password-page.module.css';

const CompleteNewPasswordPage = () => (
    <LayoutMain>
        <section className={styles.section}>
            <div>
                <HeaderAuthorization status="back" path="/login" />
                <Headlining className={styles.header} appearance="authorization" text="Готово!" />
                <Paragraph
                    className={styles.paragraph}
                    color="gray"
                    text="Ваш новый пароль вступил в силу."
                />
            </div>
            <Button className={styles.button} path="/login" color="red" type="button" text="Перейти к авторизации" />
        </section>
    </LayoutMain>
);

export default CompleteNewPasswordPage;
