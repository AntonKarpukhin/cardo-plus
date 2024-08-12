import React, { useEffect, useState } from 'react';
import {
    Button,
    HeaderAuthorization, Input, Paragraph,
} from '../../components';
import { useProfileStore } from '../../store/profile-slice';
import useInput from '../../hooks/useInput';
import styles from './spectator-registration-page.module.css';

const SpectatorRegistrationPage = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const { input, handleInputChange, setDefaultValue } = useInput();
    const { profile, getProfile } = useProfileStore();

    useEffect(() => {
        getProfile();
    }, []);

    useEffect(() => {
        setDefaultValue(profile);
    }, [profile]);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setIsChecked(event.target.checked);
    };

    return (
        <section className={styles.SpectatorPage}>
            <div>
                <HeaderAuthorization status="back" path="/regionalSelections" text="Москва" />
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
                            disabled
                        />
                        <Input
                            type="text"
                            datatype="surname"
                            placeholder="Фамилия"
                            onChange={handleInputChange}
                            value={input?.surname || ''}
                            disabled
                        />
                        <Input
                            type="text"
                            datatype="patronymic"
                            placeholder="Отчество"
                            onChange={handleInputChange}
                            value={isChecked ? '' : input?.patronymic || ''}
                            disabled
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
                            disabled
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
            <Button color="red" type="button" text="Подать заявку" />
        </section>
    );
};

export default SpectatorRegistrationPage;
