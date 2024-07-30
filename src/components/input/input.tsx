import { FC } from 'react';
import cn from 'classnames';
import { InputProps } from './input.props';
import styles from './input.module.css';

const Input: FC<InputProps> = ({
    type,
    placeholder,
    disabled,
    value,
    error = false,
    errorText = '',
    onChange,
}) => (
    <div className={cn(styles.container)}>
        <input
            className={cn(styles.input)}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            onChange={onChange}
        />
        {error && <span className={cn(styles.error)}>{errorText}</span>}
    </div>
);

export default Input;
