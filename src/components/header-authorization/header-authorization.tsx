import cn from 'classnames';
import { Link } from 'react-router-dom';
import { HeaderAuthorizationProps } from './header-authorization.props';
import styles from './header-authorization.module.css';

const HeaderAuthorization = ({
    text, status, path, className, ...props
}: HeaderAuthorizationProps) => {
    const imgView = status === 'back'
        ? '/arrow-back.svg' : 'icon-close.svg';
    const imgAlt = status === 'back'
        ? 'Назад' : 'Закрыть';
    return (
        <div className={cn(styles.HeaderAuthorization, className)} {...props}>
            <Link to={path} className={styles.button} type="button"><img src={imgView} alt={imgAlt} /></Link>
            <p className={styles.text}>{text}</p>
        </div>

    );
};

export default HeaderAuthorization;
