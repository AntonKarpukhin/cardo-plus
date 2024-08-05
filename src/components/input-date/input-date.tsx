import React, { useState } from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ru } from 'date-fns/locale/ru';
import styles from './input-date.module.css';

const InputDate: React.FC = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const minDate = new Date('1900-01-01'); // Минимальная дата
    const maxDate = new Date('2100-12-31'); // Максимальная дата
    registerLocale('ru', ru);
    setDefaultLocale('ru');

    return (
        <div className={styles.dateInputWrapper}>
            <DatePicker
                id="birthdate"
                selected={startDate}
                onChange={(date: Date | null) => setStartDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="ДД/ММ/ГГГГ"
                className={styles.dateInput}
                calendarClassName={styles.reactDatepicker}
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={100}
                minDate={minDate}
                maxDate={maxDate}
                renderCustomHeader={({
                    monthDate,
                    customHeaderCount,
                    decreaseMonth,
                    increaseMonth,
                    changeYear,
                }) => (
                    <div className={styles.DatePicker}>
                        <div>
                            <span className={styles.monthDate}>
                                {monthDate.toLocaleString('ru', { month: 'long' })}
                                {' '}
                            </span>
                            <select
                                value={monthDate.getFullYear()}
                                onChange={({ target: { value } }) => changeYear(parseInt(value, 10))}
                                className={styles.yearDropdown}
                            >
                                {Array.from({ length: 95 }, (_, i) => 1930 + i).map((year) => (
                                    <option className={styles.test} key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className={styles.wrapperButton}>
                            <button
                                className={styles.navigationButton}
                                type="button"
                                aria-label="Previous Month"
                                style={customHeaderCount === 1 ? { visibility: 'hidden' } : undefined}
                                onClick={decreaseMonth}
                            >
                                <span>
                                    <img className={styles.arrow} src="previous.svg" alt="previous" />
                                </span>
                            </button>
                            <button
                                className={styles.navigationButton}
                                type="button"
                                aria-label="Next Month"
                                onClick={increaseMonth}
                            >
                                <span>
                                    <img className={styles.arrow} src="next.svg" alt="previous" />
                                </span>
                            </button>
                        </div>
                    </div>
                )}
            />
        </div>
    );
};

export default InputDate;
