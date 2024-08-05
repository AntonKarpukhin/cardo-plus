import cn from 'classnames';
import { HeadliningProps } from './headlining.props';
import styles from './headlining.module.css';

const Headlining = ({
    appearance, text, className, ...props
}: HeadliningProps) => {
    switch (appearance) {
    case 'authorization':
        return <p className={cn(styles.authorization, className)} {...props}>{text}</p>;
    default:
        return null;
    }
};

export default Headlining;
