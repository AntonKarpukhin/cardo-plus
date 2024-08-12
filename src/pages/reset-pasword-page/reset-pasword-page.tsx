import { Link } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import {
    Button, HeaderAuthorization, Input, LayoutMain,
} from '../../components';
import styles from './reset-pasword-page.module.css';

const ResetPaswordPage = () => {
    const { input, handleInputChange } = useInput();
    return (
        <LayoutMain>
            <section className={styles.ResetPaswordPage}>
                <div>
                    <HeaderAuthorization text="Пароль" status="back" path="/profileSettings" />
                    <div className={styles.wrapper}>
                        <Input
                            type="password"
                            datatype="password"
                            placeholder="Текущий пароль"
                            onChange={handleInputChange}
                            value={input?.password || ''}
                        />
                        <Input
                            type="password"
                            datatype="oldPassword"
                            placeholder="Новый пароль"
                            onChange={handleInputChange}
                            value={input?.oldPassword || ''}
                        />
                        <Input
                            type="password"
                            datatype="newPassword"
                            placeholder="Повторите пароль"
                            onChange={handleInputChange}
                            value={input?.newPassword || ''}
                        />
                        <Link className={styles.link} to="/login/forgotPassword">Не помню пароль</Link>
                    </div>
                </div>
                <Button path="/profile" color="red" type="button" text="Сохранить" />
            </section>
        </LayoutMain>
    );
};

export default ResetPaswordPage;
