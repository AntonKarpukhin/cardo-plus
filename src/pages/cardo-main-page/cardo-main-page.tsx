import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import cn from 'classnames';
import { Accordion, CountTimer, FooterAuthorization } from '../../components';
import styles from './cardo-main-page.module.css';
import {
    oldDataInfo, oldDataResult, organizers, partners,
} from '../../utils/data';

const CardoMainPage = () => {
    const [oldResult, setResult] = useState<number>(oldDataResult[oldDataResult.length - 1]);
    const [buttonsPartners, setButtonsPartners] = useState<1 | 2>(2);
    const [isOpen, setIsOpen] = useState<number>(0);

    const navigate = useNavigate();
    const targetDate = '2024-08-31T23:59:59';

    const navigateProfile = () => {
        navigate('/profile');
    };

    return (
        <section className={styles.CardoMainPage}>
            <section className={styles.logo}>
                <img src="logo-main.png" alt="Лого" />
            </section>
            <section className={styles.bmx}>
                <img className={styles.bmxImg} src="bmx.png" alt="Лого" />
                <p className={styles.title}>КАРДО [7]</p>
                <p className={styles.subtitle}>Регистрация на национальные и региональные этапы!</p>
                <button className={styles.button} type="button" onClick={navigateProfile}>
                    Подать заявку
                    <img src="kardo-arrow.svg" alt="Стрелка" />
                </button>
                <div className={styles.wrapperButtonIcon}>
                    <Link to="https://www.youtube.com/?app=desktop&hl=ru" className={styles.buttonIcon} target="_blank"><img src="youtube-icon.svg" alt="Ютуб" /></Link>
                    <Link to="https://vk.com/" className={styles.buttonIcon} target="_blank"><img src="vk-icon.svg" alt="Вконтакте" /></Link>
                    <Link to="https://web.telegram.org/a/" className={styles.buttonIcon} target="_blank"><img src="tg-icon.svg" alt="Телеграм" /></Link>
                    <Link to="https://ru.pinterest.com/" className={styles.buttonIcon} target="_blank"><img src="printes-icon.svg" alt="Принтес" /></Link>
                </div>
            </section>
            <section className={styles.timer}>
                <p className={styles.timerTitle}>До гранд-финала КАРДО [7]:</p>
                <CountTimer targetDate={targetDate} />
            </section>
            <section className={styles.mission}>
                <h2 className={styles.missionTitle}>НАША МИССИЯ</h2>
                <p className={styles.missionSubtitle}>
                    {`Мир <<КАРДО>> полон возможнойстей для людей
                    улиц. В нем удивительным образом
                    соплетены сотни историй и судеб. И всё
                    стало возможным благодаря вам`}
                </p>
                <div className={styles.missionWrapperCharitable}>
                    <img src="mission-arrow.svg" alt="Стрелка" />
                    <div>
                        <p className={styles.missionCharitable}>БЛАГОТВОРИТЕЛЬНЫЙ</p>
                        <p className={styles.missionFund}>ФОНД</p>
                    </div>
                </div>
                <p className={styles.missionGoals}>ЦЕЛИ КАРДО</p>
                <p className={styles.missionGoalsSubtitle}>
                    Поиск, поддержка и продюсирование
                    талантливых людей в области уличной культуры
                    и спорта, а также информирование мирового
                    общества о самых интересны организациях,
                    проектах и людях из индустрии улиц.
                </p>
            </section>
            <section className={styles.prize}>
                <div className={styles.prizeWrapperCharitable}>
                    <img src="mission-arrow.svg" alt="Стрелка" />
                    <div>
                        <p className={styles.prizeWrapperCharitableTitle}>ПРЕМИЯ КАРДО</p>
                        <p className={styles.prizeWrapperCharitableSubTitle}>О НАС</p>
                    </div>
                </div>
                <img src="from-frame.png" alt="Картинка о нас" />
                <p className={styles.prizeFrom}>О НАС</p>
                <p className={styles.prizeFromSubtitle}>
                    {`<<КАРДО>> - так в Римской империи называлась
                    улица, ориентированная с севера на юг. Именно
                    она была центром социлаьной и экономической 
                    жизни города. Сегодня же это слово не только 
                    не теряет актуальности, но и обретает новую
                    силу. Потому что <<КАРДО>> - это первая 
                    международная премия за развитие уличной 
                    культуры и спорта, которая с каждым годом 
                    покоряет новые высоты и вдохновляет на это людей!`}
                </p>
                <div className={styles.prizeWrapperMore}>
                    <p className={styles.prizeMore}>Подробнее</p>
                    <img src="from-arrow.svg" alt="Стрелка вниз" />
                </div>
                <img className={styles.prizeImgStreets} src="streets.png" alt="Картинка улицы" />
            </section>
            <section className={styles.data}>
                <div className={styles.wrapperData}>
                    <div>
                        <p className={styles.dataSum}>{'< 250 тыс.'}</p>
                        <p className={styles.dataSumDescr}>Зрителей онлайн</p>
                    </div>
                    <div>
                        <p className={styles.dataSum}>70 тыс.</p>
                        <p className={styles.dataSumDescr}>Зрителей офлайн</p>
                    </div>
                    <div>
                        <p className={styles.dataSum}>{'< 250 млн'}</p>
                        <p className={styles.dataSumDescr}>медиаохват</p>
                    </div>
                    <div>
                        <p className={styles.dataSum}>2,5 тыс.</p>
                        <p className={styles.dataSumDescr}>участников</p>
                    </div>
                </div>
                <div className={styles.dataResult}>
                    <p className={styles.dataResultLen}>ИТОГИ КАРДО</p>
                    <div className={styles.dataResultArr}>
                        {oldDataResult.map((item) => (
                            <button
                                key={item}
                                onClick={() => setResult(item)}
                                className={cn(styles.dataResultButton, {
                                    [styles.dataResultButtonActive]: oldResult === item,
                                })}
                                type="button"
                            >
                                {`[${item}]${oldDataResult[oldDataResult.length - 1] !== item ? ',' : ''}`}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <div className={styles.dataWrapperForecast}>
                        <div className={styles.dataWrapperForecast2}>
                            <p className={styles.dataForecastTitle}>{oldDataInfo[oldResult - 2].directions}</p>
                            <p className={styles.dataForecastSubTitle}>Направлений</p>
                        </div>
                        <div className={styles.dataWrapperForecast2}>
                            <p className={styles.dataForecastTitle}>{oldDataInfo[oldResult - 2].countries}</p>
                            <p className={styles.dataForecastSubTitle}>страны</p>
                        </div>
                        <div className={styles.dataWrapperForecast2}>
                            <p className={styles.dataForecastTitle}>{oldDataInfo[oldResult - 2].participants}</p>
                            <p className={styles.dataForecastSubTitle}>Участников</p>
                        </div>
                    </div>
                </div>

                <div className={styles.dataResult2}>
                    <p className={styles.dataResultLen}>ПРОГНОЗЫ КАРДО</p>
                    <p className={styles.dataResultLen}>[7]</p>
                </div>
                <div className={styles.dataWrapperForecast}>
                    <div className={styles.dataWrapperForecast2}>
                        <p className={styles.dataForecastTitle}>11</p>
                        <p className={styles.dataForecastSubTitle}>Направлений</p>
                    </div>
                    <div className={styles.dataWrapperForecast2}>
                        <p className={styles.dataForecastTitle}>110</p>
                        <p className={styles.dataForecastSubTitle}>страны</p>
                    </div>
                    <div className={styles.dataWrapperForecast2}>
                        <p className={styles.dataForecastTitle}>4000</p>
                        <p className={styles.dataForecastSubTitle}>Участников</p>
                    </div>
                </div>
            </section>
            <section className={styles.partners}>
                <p className={styles.partnersTitle}>НАШИ</p>
                <p className={styles.partnerssubTitle}>ПАРТНЁРЫ</p>
                <div className={styles.partnersWrapperButton}>
                    <button
                        onClick={() => setButtonsPartners(1)}
                        className={cn(styles.partnersButton, {
                            [styles.partnersButtonActive]: buttonsPartners === 1,
                        })}
                        type="button"
                    >
                        Организаторы
                    </button>
                    <button
                        onClick={() => setButtonsPartners(2)}
                        className={cn(styles.partnersButton, {
                            [styles.partnersButtonActive]: buttonsPartners === 2,
                        })}
                        type="button"
                    >
                        Генеральные партнёры
                    </button>
                </div>
                <div>
                    <Accordion partners={buttonsPartners === 2 ? partners : organizers} isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>
            </section>
            <footer className={styles.footer}>
                <div className={styles.footerWrapper}>
                    <img src="footer-arrow.svg" alt="Стрелка" />
                    <div className={styles.footerWrapperInfo}>
                        <p className={styles.footerTitle}>Конкурсы</p>
                        <p className={styles.footerSubTitle}>КАРДО [7] Премия</p>
                        <p className={styles.footerSubTitle}>Видеоконкурс</p>
                        <p className={styles.footerSubTitle}>КАРДО — Дети</p>
                    </div>
                    <img src="footer-arrow.svg" alt="Стрелка" />
                    <div className={styles.footerWrapperInfo}>
                        <p className={styles.footerTitle}>О нас</p>
                        <p className={styles.footerSubTitle}>Новости</p>
                        <p className={styles.footerSubTitle}>Документы</p>
                        <p className={styles.footerSubTitle}>О КАРДО</p>
                    </div>
                </div>

                <div className={styles.footerWrapper}>
                    <img src="footer-arrow.svg" alt="Стрелка" />
                    <div className={styles.footerWrapperInfo}>
                        <p className={styles.footerTitle}>Направления</p>
                        <p className={styles.footerSubTitle}>BMX</p>
                        <p className={styles.footerSubTitle}>Хип-хоп</p>
                        <p className={styles.footerSubTitle}>Граффити</p>
                        <p className={styles.footerSubTitle}>Диджеинг</p>
                        <p className={styles.footerSubTitle}>Воркаут</p>
                        <p className={styles.footerSubTitle}>Паркур</p>
                    </div>
                    <div className={styles.footerWrapperInfo2}>
                        <p className={styles.footerTitle} />
                        <p className={styles.footerSubTitle}>Трюковой самокат</p>
                        <p className={styles.footerSubTitle}>Скейтбординг</p>
                        <p className={styles.footerSubTitle}>Брейкинг</p>
                        <p className={styles.footerSubTitle}>Трикинг</p>
                        <p className={styles.footerSubTitle}>Фриран</p>
                    </div>
                </div>
                <div className={styles.footerButton}>
                    <Link to="https://www.youtube.com/?app=desktop&hl=ru" className={styles.buttonIcon} target="_blank">
                        <img
                            src="youtube-icon.svg"
                            alt="Ютуб"
                        />
                    </Link>
                    <Link to="https://vk.com/" className={styles.buttonIcon} target="_blank">
                        <img
                            src="vk-icon.svg"
                            alt="Вконтакте"
                        />
                    </Link>
                    <Link to="https://web.telegram.org/a/" className={styles.buttonIcon} target="_blank">
                        <img
                            src="tg-icon.svg"
                            alt="Телеграм"
                        />
                    </Link>
                    <Link to="https://ru.pinterest.com/" className={styles.buttonIcon} target="_blank">
                        <img
                            src="printes-icon.svg"
                            alt="Принтес"
                        />
                    </Link>
                </div>
                <div className={styles.footerWrapperEmail}>
                    <img src="footer-email.svg" alt="Конверт" />
                    <p className={styles.footerEmail}>infocardoawward.com</p>
                </div>
            </footer>
            <FooterAuthorization />
        </section>
    );
};

export default CardoMainPage;
