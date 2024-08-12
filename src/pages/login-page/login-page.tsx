import React from 'react';

import { Link } from 'react-router-dom';
import {
    Headlining, Paragraph, HeaderAuthorization, Button, Input, LayoutMain,
} from '../../components';
import styles from './login-page.module.css';
import useInput from '../../hooks/useInput';

const LoginPage = () => {
    const { input, handleInputChange } = useInput();

    return (
        <LayoutMain>
            <section className={styles.page}>
                <div className={styles.container}>
                    <HeaderAuthorization status="back" path="/home" />
                    <Headlining className={styles.header} appearance="authorization" text="С возвращением" />
                    <Paragraph
                        className={styles.paragraph}
                        color="gray"
                        text="Мы рады видеть вас вновь!"
                    />
                    <form className={styles.form}>
                        <Input
                            type="text"
                            placeholder="Логин"
                            datatype="login"
                            onChange={handleInputChange}
                            value={input?.login || ''}
                        />
                        <Input
                            type="password"
                            datatype="password"
                            placeholder="Пароль"
                            onChange={handleInputChange}
                            value={input?.password || ''}
                        />
                    </form>
                    <Link className={styles.link} to="forgotPassword">Забыли пароль?</Link>
                </div>
                <Button color="red" type="button" text="Продолжить" path="/profile" />
            </section>
        </LayoutMain>
    );
};

export default LoginPage;
