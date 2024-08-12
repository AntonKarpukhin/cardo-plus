import React, { useState } from 'react';
import cn from 'classnames';
import {
    Headlining, Paragraph, HeaderAuthorization, Button, Input, LayoutMain,
} from '../../components';
import styles from './create-profile-page.module.css';
import useInput from '../../hooks/useInput';

const CreateProfilePage = () => {
    const [users, setUsers] = useState<'user' | 'expert'>('user');
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const { input, handleInputChange } = useInput();

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setIsChecked(event.target.checked);
    };

    const handleUsersChange = (user: 'user' | 'expert'): void => {
        setUsers(user);
    };

    return (
        <LayoutMain>
            <section className={styles.CreateProfile}>
                <div>
                    <HeaderAuthorization status="back" path="/" />
                    <Headlining className={styles.header} appearance="authorization" text="Создайте свой профиль" />
                    <Paragraph
                        className={styles.paragraph}
                        color="gray"
                        text="Создайте аккаунт, чтобы выкладывать работы и общаться в сообществе единомышленников"
                    />
                    <div className={styles.wrapperButton}>
                        <button
                            className={cn(styles.button, {
                                [styles.buttonActive]: users === 'user',
                            })}
                            type="button"
                            onClick={() => handleUsersChange('user')}
                        >
                            Участники/Зрители
                        </button>
                        <button
                            className={cn(styles.button, {
                                [styles.buttonActive]: users === 'expert',
                            })}
                            type="button"
                            onClick={() => handleUsersChange('expert')}
                        >
                            Эксперты
                        </button>
                    </div>
                    <form className={styles.form}>
                        <Input
                            type="email"
                            placeholder="Email"
                            datatype="email"
                            onChange={handleInputChange}
                            value={input?.email || ''}
                        />
                        <Input
                            type="password"
                            datatype="password"
                            placeholder="Пароль"
                            onChange={handleInputChange}
                            value={input?.password || ''}
                        />
                        <Input
                            type="password"
                            datatype="oldPassword"
                            placeholder="Повторите пароль"
                            onChange={handleInputChange}
                            value={input?.oldPassword || ''}
                        />
                    </form>
                </div>
                <div className={styles.wrapperBot}>
                    <div className={styles.wrapperCheckbox}>
                        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                        <label className={styles.label} htmlFor="checkboxAccept">
                            <input
                                className={styles.input}
                                id="checkboxAccept"
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                            <span className={styles.customCheckbox} />
                        </label>
                        <Paragraph
                            className={styles.paragraphAccept}
                            color="gray"
                            text="Я соглашаюсь на обработку, хранение и передачу персональных данных в рамках реализации всех этапов КАРДО"
                        />
                    </div>
                    <Button path="/fillingProfile" color="red" type="button" text="Продолжить" />
                </div>
            </section>
        </LayoutMain>
    );
};

export default CreateProfilePage;
