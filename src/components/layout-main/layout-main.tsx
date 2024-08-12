import cn from 'classnames';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { LayoutMainProps } from './layout-main.props';
import styles from './layout-main.module.css';

const LayoutMain = ({ children }: LayoutMainProps) => {
    const [loacation, setLoacation] = useState<string>('');
    const { pathname } = useLocation();

    useEffect(() => {
        setLoacation(pathname);
    }, [pathname]);

    return (

        <div className={cn(styles.LayoutMain, {
            [styles.LayoutMainDark]: loacation === '/program',
        })}
        >
            {children}
        </div>
    );
};

export default LayoutMain;
