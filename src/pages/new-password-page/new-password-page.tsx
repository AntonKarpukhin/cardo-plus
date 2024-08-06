import React from 'react';

import {
    Headlining, Paragraph, HeaderAuthorization, Button, Input,
} from '../../components';
import styles from './new-password-page.module.css';
import useInput from '../../hooks/useInput';

const NewPasswordPage = () => {
    const { input, handleInputChange } = useInput();

    return (
        <section className={styles.page}>
            <div className={styles.container}>
                <HeaderAuthorization status="back" path="/home" />
                <Headlining className={styles.header} appearance="authorization" text="Придуймайте новый пароль" />
                <Paragraph
                    className={styles.paragraph}
                    color="gray"
                    text="Введите ваш пароль ниже."
                />
                <form className={styles.form}>
                    <Input
                        type="password"
                        datatype="password"
                        placeholder="Новый пароль"
                        onChange={handleInputChange}
                        value={input?.password || ''}
                    />
                </form>
                <Paragraph
                    className={styles.description}
                    color="gray"
                    text="Подсказка: Рекомендуется задать пароль длиной не менее двенадцати символов. Чтобы
                    сделать его надёжнее, используйте буквы верхнего и
                    нижнего регистра, числа и символы наподобие! «? $ % ^ &)."
                />
            </div>
            <Button path="/newPasswordComplete" color="red" type="button" text="Сохранить пароль" />
        </section>
    );
};

export default NewPasswordPage;
