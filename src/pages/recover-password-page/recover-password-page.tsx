import {
    Headlining, Paragraph, HeaderAuthorization, Button, Input,
} from '../../components';
import styles from './recover-password-page.module.css';
import useInput from '../../hooks/useInput';

const RecoverPasswordPage = () => {
    const { input, handleInputChange } = useInput();

    return (
        <section className={styles.section}>
            <div>
                <HeaderAuthorization status="back" path="/login" />
                <Headlining className={styles.header} appearance="authorization" text="Восстановите пароль" />
                <Paragraph
                    className={styles.paragraph}
                    color="gray"
                    text="Введите ваше имя пользователя или email. Вы получите email сообщение с инструкциями по сбросу пароля."
                />
                <form className={styles.form}>
                    <Input
                        type="text"
                        placeholder="Имя пользователя / email"
                        datatype="userName"
                        onChange={handleInputChange}
                        value={input?.userName || ''}
                    />
                </form>
            </div>
            <Button className={styles.button} path="/checkEmail" color="red" type="button" text="Получить новый пароль" />
        </section>
    );
};

export default RecoverPasswordPage;
