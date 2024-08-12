import React, { useEffect, useState } from 'react';
import {
    Button,
    HeaderAuthorization, Input, Paragraph, InputDate,
} from '../../components';
import { useProfileStore } from '../../store/profile-slice';
import { useTypesOfCompetitionsStore } from '../../store/types-of-competitions-slice';
import useInput from '../../hooks/useInput';
import styles from './regional-registration-page.module.css';
import { testofPlace } from '../../utils/data';

const RegionalRegistrationPage = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const { input, handleInputChange, setDefaultValue } = useInput();
    const { profile, getProfile } = useProfileStore();
    const { typesOfCompetitions, loadTypesOfCompetitions } = useTypesOfCompetitionsStore();

    const options = testofPlace.split('\n').filter((option) => option.trim() !== '');

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string>(options[0]);
    const [selectedRadioOptions, setSelectedRadioOptions] = useState<string[]>([]);
    const [warning, setWarning] = useState<string | null>(null);
    const [gender, setGender] = useState('');
    const [initialDate, setInitialDate] = useState<Date | null>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        toggleDropdown();
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, option: string) => {
        if (event.key === 'Enter' || event.key === ' ') {
            handleOptionClick(option);
        }
    };

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        if (selectedRadioOptions.includes(value)) {
            setSelectedRadioOptions(selectedRadioOptions.filter((item) => item !== value));
        } else if (selectedRadioOptions.length < 2) {
            setSelectedRadioOptions([...selectedRadioOptions, value]);
            setWarning(null);
        } else {
            setWarning('Можно выбрать не более 2 номинаций для участия');
        }
    };
    // eslint-disable-next-line consistent-return
    useEffect(() => {
        if (warning) {
            const timer = setTimeout(() => {
                setWarning(null);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [warning]);

    useEffect(() => {
        getProfile();
        loadTypesOfCompetitions();
    }, []);

    useEffect(() => {
        setDefaultValue(profile);
    }, [profile]);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setIsChecked(event.target.checked);
    };
    const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setGender(event.target.value);
    };

    useEffect(() => {
        setDefaultValue(profile);
        const getInitialDate = new Date(profile.dateOfBirth);
        setInitialDate(getInitialDate);
    }, [profile]);

    return (
        <section className={styles.ApplicationRegistrationPage}>
            <div>
                <HeaderAuthorization status="back" path="/regionalSelections" />
                <h2 className={styles.title}>Заявка на регистрацию</h2>
                <form className={styles.form}>
                    <div className={styles.wrapperPersonal}>
                        <Paragraph
                            className={styles.place}
                            color="red"
                            text="Страна или регион"
                        />
                        <div className={styles.selectContainerCountry}>
                            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                            <label htmlFor="place" className={styles.dropdownLabel}>
                                <div id="place" className={styles.dropdown}>
                                    <button type="button" className={styles.dropdownToggle} onClick={toggleDropdown}>
                                        {selectedOption}
                                        {isOpen ? (<img src="chevron-up_24.png" alt="свернуть" />)
                                            : (<img src="chevron-down.png" alt="развернуть" />)}
                                    </button>
                                    {isOpen && (
                                        <div className={styles.dropdownMenu}>
                                            {options.map((option) => (
                                                <div
                                                    key={option}
                                                    className={styles.dropdownItem}
                                                    onClick={() => handleOptionClick(option)}
                                                    onKeyDown={(event) => handleKeyDown(event, option)}
                                                    role="button"
                                                    tabIndex={0}
                                                >
                                                    {option}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </label>
                        </div>
                        <div className={styles.wrapperRadio}>
                            <Paragraph
                                className={styles.subtitile}
                                color="black"
                                text="Направление"
                            />
                            {typesOfCompetitions && typesOfCompetitions.map((item) => (
                                <label key={item} className={styles.radioLabel}>
                                    <span className={styles.radioText}>{item}</span>
                                    <input
                                        type="checkbox"
                                        name={item}
                                        value={item}
                                        className={styles.customCheckboxInput}
                                        checked={selectedRadioOptions.includes(item)}
                                        onChange={handleRadioChange}
                                    />
                                    <span className={styles.customCheckbox} />
                                </label>
                            ))}
                            {warning && <p className={styles.warning}>{warning}</p>}
                        </div>
                        <Paragraph
                            className={styles.subtitile}
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
                        <div className={styles.wrapperCheckboxPatronymic}>
                            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                            <label className={styles.labelPatronymic} htmlFor="checkboxAccept">
                                <input
                                    className={styles.inputPatronymic}
                                    id="checkboxAccept"
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                />
                                <span className={styles.customCheckboxPatronymic} />
                            </label>
                            <Paragraph
                                className={styles.paragraphAccept}
                                color="gray"
                                text="Нет отчества"
                            />
                        </div>
                        <div className={styles.selectwrapper}>
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
                        </div>
                        <Input
                            type="text"
                            datatype="country"
                            placeholder="Страна"
                            onChange={handleInputChange}
                            value={input?.country || ''}
                            disabled
                        />
                        <div className={styles.wrapperPersonal}>
                            <Paragraph
                                className={styles.subtitile}
                                color="black"
                                text="Дата рождения"
                            />
                            <InputDate initialDate={initialDate} />
                        </div>
                        <div className={styles.wrapperPersonal}>
                            <Paragraph
                                className={styles.subtitile}
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
                                className={styles.subtitile}
                                color="black"
                                text="Ссылка на соц. сеть (опционально)"
                            />
                            <Input
                                type="text"
                                datatype="socialMedia"
                                placeholder="https://vk.com"
                                onChange={handleInputChange}
                                value={input?.socialMedia || ''}
                            />
                        </div>
                        <button type="button" className={styles.addButton}>Добавить</button>
                    </div>
                </form>
            </div>
            <Button color="red" type="button" text="Подать заявку" />
        </section>
    );
};

export default RegionalRegistrationPage;
