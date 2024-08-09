import cn from 'classnames';
import { Link } from 'react-router-dom';
import { SettingsItemsProps } from './settings-items.props';
import styles from './settings-items.module.css';

const SettingsItems = ({
    items, switcher, changeParameters, className, ...props
}: SettingsItemsProps) => (
    <div className={cn(styles.SettingsItems, className)} {...props}>
        {items.map(({ name, type, path }) => (
            <Link to={path} key={name} className={styles.Link}>
                {name}
                {type === 'arrow' ? <img src="settings-arrow.svg" alt="arrow" />
                    : (
                        <button
                            aria-label="Some label"
                            type="button"
                            className={styles.switcher}
                            onClick={changeParameters.handleNotificationsChange}
                        >
                            <span
                                className={cn(styles.span, {
                                    [styles.spanActive]: switcher.notifications,
                                })}
                            />
                        </button>
                    )}
            </Link>
        ))}
    </div>
);

export default SettingsItems;
