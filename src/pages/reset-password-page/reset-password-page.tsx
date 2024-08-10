import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import {
    Headlining, HeaderAuthorization, Button, Input,
} from '../../components';
import styles from './reset-password-page.module.css';
import useInput from '../../hooks/useInput';

const ResetPasswordPage = () => {
    const { input, handleInputChange } = useInput();
    const [showAlert, setShowAlert] = useState<boolean>(false);

    const toggleAlert = () => {
        setShowAlert(!showAlert);
    };

    return (
        <section className={styles.page}>
            <div className={styles.container}>
                { showAlert ? (
                    <div className={styles.alert}>Пароль успешно изменён</div>
                ) : (
                    <HeaderAuthorization text="Пароль" path="/profile" status="back" />
                )}
                <form className={styles.form}>
                    <Input
                        type="password"
                        datatype="currentPassword"
                        placeholder="Текущий пароль"
                        onChange={handleInputChange}
                        value={input?.currentPassword || ''}
                    />
                    <Input
                        type="password"
                        datatype="newPassword"
                        placeholder="Новый пароль"
                        onChange={handleInputChange}
                        value={input?.newPassword || ''}
                    />
                    <Input
                        type="password"
                        datatype="repeatPassword"
                        placeholder="Повторите пароль"
                        onChange={handleInputChange}
                        value={input?.repeatPassword || ''}
                    />
                </form>
                <Link className={styles.link} to="/forgotPassword">Не помню пароль</Link>
            </div>
            <Button color="red" type="button" text="Сохранить" onClick={toggleAlert} />
        </section>
    );
};

export default ResetPasswordPage;
