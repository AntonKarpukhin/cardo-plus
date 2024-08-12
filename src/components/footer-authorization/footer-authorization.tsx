import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import styles from './footer-authorization.module.css';
import { FooterAuthorizationProps2 } from './footer-authorization.props';

const FooterAuthorizationProps = ({ className, ...props }: FooterAuthorizationProps2) => {
    const { pathname } = useLocation();
    const [loacation, setLoacation] = useState<string>('');

    useEffect(() => {
        setLoacation(pathname);
    }, [pathname]);

    return (
        <section
            className={cn(styles.FooterAuthorizationProps, className, {
                [styles.FooterAuthorizationPropsDark]: loacation === '/program' || loacation === '/cardo',
            })}
            {...props}
        >
            <Link
                className={cn(styles.link, {
                    [styles.linkActive]: pathname.slice(0, 6) === '/cardo',
                })}
                to="/cardo"
            >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        className={cn(styles.img, {
                            [styles.imgActive]: pathname.slice(0, 6) === '/cardo',
                        })}
                        d="M14.9953 4.36218C14.8738 4.24401 14.7282 4.15093 14.5675 4.08869C14.4067 4.02645 14.2344 3.99638
                        14.061 4.00035C13.8876 4.00432 13.7169 4.04224 13.5595 4.11176C13.4021 4.18128 13.2614 4.28092 13.1459
                        4.4045L5.32173 12.7722C5.11451 12.9938 4.99998 13.2805 5 13.5776V22.7906C5 23.1114 5.13345 23.419 5.371
                        23.6458C5.60854 23.8726 5.93073 24 6.26667 24H10.0667C10.4026 24 10.7248 23.8726 10.9623 23.6458C11.1999
                        23.419 11.3333 23.1114 11.3333 22.7906V18.5578C11.3333 18.2371 11.4668 17.9295 11.7043 17.7027C11.9419
                        17.4759 12.2641 17.3484 12.6 17.3484H16.4C16.7359 17.3484 17.0581 17.4759 17.2957 17.7027C17.5332 17.9295
                        17.6667 18.2371 17.6667 18.5578V22.7906C17.6667 23.1114 17.8001 23.419 18.0377 23.6458C18.2752 23.8726
                        18.5974 24 18.9333 24H22.7333C23.0693 24 23.3915 23.8726 23.629 23.6458C23.8665 23.419 24 23.1114 24
                        22.7906V13.6103C23.9996 13.2935 23.8691 12.9895 23.6365 12.7637L14.9953 4.36218Z"
                        stroke="#808080"
                        strokeWidth="2"
                    />
                </svg>
                Главная
            </Link>
            <Link className={styles.link} to="/ribbon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        className={styles.img}
                        d="M20.6664 5H6.66642C4.08909 5 1.99976 7.08934 1.99976 9.66667V19C1.99976 21.5773
                        4.08909 23.6667 6.66642 23.6667H20.6664C23.2438 23.6667 25.3331 21.5773 25.3331 19V9.66667C25.3331
                        7.08934 23.2438 5 20.6664 5Z"
                        stroke="#808080"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        className={styles.img}
                        d="M17.1663 14.333L11.333 10.833V17.833L17.1663 14.333Z"
                        stroke="#808080"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                Лента
            </Link>
            <Link
                className={cn(styles.link, {
                    [styles.linkActive]: pathname.slice(0, 8) === '/program',
                })}
                to="/program"
            >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        className={cn(styles.img, {
                            [styles.imgActive]: pathname.slice(0, 8) === '/program',
                        })}
                        d="M4.66675 10.5V22.1667C4.66675 22.7855 4.91258 23.379 5.35017 23.8166C5.78775
                        24.2542 6.38124 24.5 7.00008 24.5H21.0001C21.6189 24.5 22.2124 24.2542 22.65 23.8166C23.0876
                        23.379 23.3334 22.7855 23.3334 22.1667V10.5M4.66675 10.5V8.16667C4.66675 7.54783 4.91258 6.95434
                        5.35017 6.51675C5.78775 6.07917 6.38124 5.83333 7.00008 5.83333H9.33341M4.66675 10.5H23.3334M23.3334
                        10.5V8.16667C23.3334 7.54783 23.0876 6.95434 22.65 6.51675C22.2124 6.07917 21.6189 5.83333 21.0001
                        5.83333H18.6667M9.33341 5.83333H18.6667M9.33341 5.83333V3.5M18.6667 5.83333V3.5"
                        stroke="#808080"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                Программа
            </Link>
            <Link
                className={cn(styles.link, {
                    [styles.linkActive]: pathname.slice(0, 8) === '/profile',
                })}
                to="/profile"
            >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        className={cn(styles.img, {
                            [styles.imgActive]: pathname.slice(0, 8) === '/profile',
                        })}
                        d="M23 23C23 19.4986 18.9662 16.6667 14 16.6667C9.03376 16.6667 5 19.4986
                        5 23M14 13.5C16.6095 13.5 18.725 11.3733 18.725 8.75C18.725 6.12665 16.6095 4 14
                        4C11.3905 4 9.275 6.12665 9.275 8.75C9.275 11.3733 11.3905 13.5 14 13.5Z"
                        stroke="grey"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                Профиль
            </Link>
        </section>
    );
};

export default FooterAuthorizationProps;
