import React, { useEffect, useState } from 'react';
import {
    Button, HeaderAuthorization, Input, LayoutMain, Paragraph,
} from '../../components';
import { useProfileStore } from '../../store/profile-slice';
import styles from './spectator-registration-page.module.css';
import useInput from '../../hooks/useInput';

const SpectatorRegistrationPage = () => {
    const { input, handleInputChange } = useInput();
    const { getProfile } = useProfileStore();

    const [isChecked, setIsChecked] = useState<boolean>(false);

    useEffect(() => {
        getProfile();
    }, []);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setIsChecked(event.target.checked);
    };

    return (
        <LayoutMain>
            <section className={styles.SpectatorRegistrationPage}>
                <div>
                    <HeaderAuthorization text="Москва" status="back" path="/profile" />
                    <h2 className={styles.title}>Заявка на регистрацию зрителя</h2>
                    <form className={styles.form}>
                        <div className={styles.wrapperPersonal}>
                            <Paragraph
                                className={styles.personal}
                                color="black"
                                text="Личная информация"
                            />
                            <Input
                                type="text"
                                datatype="name"
                                placeholder="Имя"
                                onChange={handleInputChange}
                                value={input?.name || ''}
                            />
                            <Input
                                type="text"
                                datatype="surname"
                                placeholder="Фамилия"
                                onChange={handleInputChange}
                                value={input?.surname || ''}
                            />
                            <Input
                                type="text"
                                datatype="patronymic"
                                placeholder="Отчество"
                                disabled={isChecked}
                                onChange={handleInputChange}
                                value={isChecked ? '' : input?.patronymic || ''}
                            />
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
                                    text="Нет отчества"
                                />
                            </div>

                            <Input
                                type="text"
                                datatype="country"
                                placeholder="Страна"
                                onChange={handleInputChange}
                                value={input?.country || ''}
                            />
                        </div>

                        <div className={styles.wrapperPersonal}>
                            <Paragraph
                                className={styles.personal}
                                color="black"
                                text="Контактные данные"
                            />
                            <Input
                                type="text"
                                datatype="phoneNumber"
                                placeholder="Телефон"
                                onChange={handleInputChange}
                                value={input?.phoneNumber || ''}
                            />
                        </div>
                    </form>
                </div>
                <Button path="/profile" color="red" type="button" text="Подать заявку" />
            </section>
        </LayoutMain>
    );
};

export default SpectatorRegistrationPage;
