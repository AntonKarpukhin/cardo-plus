import { LayoutMainProps } from './layout-main.props';
import styles from './layout-main.module.css';

const LayoutMain = ({ children }: LayoutMainProps) => (
    <div className={styles.LayoutMain}>
        {children}
    </div>
);

export default LayoutMain;
