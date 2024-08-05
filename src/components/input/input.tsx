import { FC, useState } from 'react';
import cn from 'classnames';
import { InputProps } from './input.props';
import styles from './input.module.css';

const Input: FC<InputProps> = ({
    type,
    placeholder,
    disabled,
    value,
    error = false,
    errorMessage = '',
    onChange,
    datatype,
}) => {
    const [inputType, setInputType] = useState(type);

    const togglePasswordVisibility = () => {
        setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));
    };

    return (
        <div className={cn(styles.container)}>
            <div className={styles.inputWrapper}>
                <input
                    className={cn(styles.input)}
                    type={inputType}
                    placeholder={placeholder}
                    disabled={disabled}
                    value={value}
                    onChange={onChange}
                    data-type={datatype}
                />
                {type === 'password'
                    && (
                        <button className={styles.inputIcon} type="button" onClick={togglePasswordVisibility}>
                            <img src="visibility.svg" alt="arrow" />
                        </button>
                    )}
                {error && <span className={cn(styles.error)}>{errorMessage}</span>}
            </div>
        </div>
    );
};

export default Input;
