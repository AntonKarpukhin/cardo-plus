import { FC } from 'react';
import cn from 'classnames';
import { ButtonProps } from './button.props';
import styles from './button.module.css';

const Button:FC<ButtonProps> = ({
    color, className, text, type, ...props
}) => {
    const buttonColor = color === 'red' ? 'red' : 'white';
    switch (type) {
    case 'submit':
        return (
            <button
                className={cn(styles.button, className, styles[buttonColor])}
                type="submit"
                {...props}
            >
                {text}
            </button>
        );
    default:
        return (
            <button
                className={cn(styles.button, className, styles[buttonColor])}
                type="button"
                {...props}
            >
                {text}
            </button>
        );
    }
};
export default Button;
