import { FC } from 'react';
import cn from 'classnames';
import { ParagraphProps } from './paragraph.props';
import styles from './paragraph.module.css';

const Paragraph:FC<ParagraphProps> = ({
    color, className, text, ...props
}) => (
    <p
        className={cn(className, {
            [styles.red]: color === 'red',
            [styles.gray]: color === 'gray',
            [styles.white]: color === 'white',
            [styles.black]: color === 'black',
        })}
        {...props}
    >
        {text}
    </p>
);

export default Paragraph;
