import cn from 'classnames';
import styles from './programs-button-date.module.css';
import { ProgramsButtonDateProps } from './programs-button-date.props';

const ProgramsButtonDate = ({
    active, date, className, handleDataChange, ...props
}: ProgramsButtonDateProps) => (
    <button
        className={cn(styles.ProgramsButtonDate, className, {
            [styles.active]: active,
        })}
        type="button"
        onClick={() => handleDataChange(date)}
        {...props}
    >
        {`${date} авг`}
    </button>
);

export default ProgramsButtonDate;
