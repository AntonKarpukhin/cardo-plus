import React, { useState } from 'react';
import {
    Button, HeaderAuthorization, Headlining, Input, InputDate, Paragraph,
} from '../../components';
import styles from './filling-profile-page.module.css';
import useInput from '../../hooks/useInput';

const FillingProfilePage = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const { input, handleInputChange } = useInput();

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setIsChecked(event.target.checked);
    };

    return (
        <section className={styles.FillingProfile}>
            <div>
                <HeaderAuthorization status="back" path="/createProfile" />
                <Headlining className={styles.header} appearance="authorization" text="Заполните свой профиль" />
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
                    </div>
                    <div className={styles.wrapperPersonal}>
                        <Paragraph
                            className={styles.personal}
                            color="black"
                            text="Дата рождения"
                        />
                        <InputDate />
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
                    <div className={styles.wrapperPersonal}>
                        <Paragraph
                            className={styles.personal}
                            color="black"
                            text="Ссылка на соц. сеть (опционально)"
                        />
                        <Input
                            type="text"
                            datatype="network"
                            placeholder="https://vk.com"
                            onChange={handleInputChange}
                            value={input?.network || ''}
                        />
                    </div>
                </form>
            </div>
            <Button path="/completeProfile" color="red" type="button" text="Продолжить" />
        </section>
    );
};

export default FillingProfilePage;
