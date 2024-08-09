import React, { useEffect, useState } from 'react';
import {
    Button,
    HeaderAuthorization, Input, InputDate, Paragraph, ProfileImage,
} from '../../components';
import { useProfileStore } from '../../store/profile-slice';
import useInput from '../../hooks/useInput';
import styles from './profile-information-page.module.css';

const ProfileInformationPage = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [gender, setGender] = useState('');
    const [initialDate, setInitialDate] = useState<Date | null>(null);
    const { input, handleInputChange, setDefaultValue } = useInput();
    const { profile, getProfile } = useProfileStore();

    useEffect(() => {
        getProfile();
    }, []);

    useEffect(() => {
        setDefaultValue(profile);
        const getInitialDate = new Date(profile.dateOfBirth);
        setInitialDate(getInitialDate);
    }, [profile]);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setIsChecked(event.target.checked);
    };

    const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setGender(event.target.value);
    };

    return (
        <section className={styles.ProfileInformationPage}>
            <div>
                <HeaderAuthorization status="back" path="/profileSettings" text="Моя информация" />
                <ProfileImage className={styles.img} img={profile.profilePhoto} type="information" />
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

                        <div className={styles.selectContainer}>
                            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                            <label htmlFor="gender">
                                <select className={styles.select} id="gender" value={gender} onChange={handleGenderChange}>
                                    <option value="">Выберите пол</option>
                                    <option value="Мужской">Мужской</option>
                                    <option value="Женский">Женский</option>
                                </select>
                            </label>
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
                            text="Дата рождения"
                        />
                        <InputDate initialDate={initialDate} />
                    </div>

                    <div className={styles.wrapperPersonal}>
                        <Paragraph
                            className={styles.personal}
                            color="black"
                            text="Контактные данные"
                        />
                        <Input
                            type="email"
                            datatype="email"
                            placeholder="Почта"
                            onChange={handleInputChange}
                            value={input?.email || ''}
                        />
                        <Input
                            type="text"
                            datatype="phoneNumber"
                            placeholder="Телефон"
                            onChange={handleInputChange}
                            value={input?.phoneNumber || ''}
                        />
                    </div>

                    <div className={styles.wrapperPersonal}>
                        <Paragraph
                            className={styles.personal}
                            color="black"
                            text="Адрес"
                        />
                        <Input
                            type="text"
                            datatype="country"
                            placeholder="Страна"
                            onChange={handleInputChange}
                            value={input?.country || ''}
                        />
                        <Input
                            type="text"
                            datatype="region"
                            placeholder="Регион/Область/Край/Штат/Провинция"
                            onChange={handleInputChange}
                            value={input?.region || ''}
                        />
                        <Input
                            type="text"
                            datatype="city"
                            placeholder="Город"
                            onChange={handleInputChange}
                            value={input?.city || ''}
                        />
                    </div>
                </form>
            </div>
            <Button path="/profile" color="red" type="button" text="Сохранить" />
        </section>
    );
};

export default ProfileInformationPage;
