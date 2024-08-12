import cn from 'classnames';
import { useState } from 'react';
import { HeaderAuthorization, LayoutMain } from '../../components';
import { onlineSelection } from '../../utils/data';
import styles from './online-selection-page.module.css';

const OnlineSelectionPage = () => {
    const [accordion, setAccordion] = useState(false);
    const [popup, setPopup] = useState(true);

    return (
        <LayoutMain>
            <section className={cn(styles.OnlineSelectionPage, {
                [styles.OnlineSelectionPageOpen]: accordion && popup,
            })}
            >
                {popup
                    ? (
                        <>
                            <HeaderAuthorization status="back" path="/profile" />
                            <h2 className={styles.titleMain}>
                                Онлайн отбор на соревнования
                            </h2>

                            <div>
                                <div className={styles.accordionWrapper}>
                                    <button
                                        type="button"
                                        className={styles.accordionButton}
                                        onClick={() => setAccordion(!accordion)}
                                    >
                                        <span>Описание конкурса</span>
                                    </button>
                                    <span>{accordion ? '▲' : '▼'}</span>
                                </div>
                                {accordion && (
                                    <p className={styles.accordionSpanOpen}>
                                        Покажи свой скилл по каждому направлению соревнований и попади на
                                        гранд-финал в легендарные батлы и самое масштабное событие улиц!
                                        Регистрируйся на участие в конкурсе и пройди по результатам онлайн-отбора
                                        в ТОП-24 категорий про, или ТОП-12 других категорий!
                                        По итогу этого этапа отбора участники, вошедшие, в ТОП-4 или ТОП-3
                                        (в зависимости от направлений, смотри внимательно в положении)
                                        получат путёвку «всё включено» (питание, проживание, проезд) на гранд-финал
                                        22–25 августа в Ставрополь!
                                    </p>
                                )}
                            </div>

                            <div className={styles.wrapperInfo}>
                                {onlineSelection.map((item) => (
                                    <div key={item.title} className={styles.wrapper}>
                                        <div className={styles.wrapperImg}>
                                            <div>
                                                <div className={styles.wrapperStatus}>
                                                    <div className={cn(styles.radius, {
                                                        [styles.radiusComplete]: item.status === 'close',
                                                    })}
                                                    />
                                                    <p>{item.status}</p>
                                                </div>
                                                <p className={styles.title}>{item.title}</p>
                                                <p className={styles.date}>{item.startDate}</p>
                                                <p className={styles.date}>{item.endDate}</p>
                                            </div>
                                            <img src="/kardo-red.svg" alt="Заставка" />
                                        </div>
                                        <button
                                            onClick={() => setPopup(!popup)}
                                            className={styles.button}
                                            type="button"
                                        >
                                            Открыть задание
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </>
                    )
                    : (
                        <div className={styles.popupWrapper}>
                            <p className={styles.popupTitle}>Задание для участников</p>
                            <p className={styles.popupSubTitle}>
                                — Заполнить заявку на официальном сайте; — Выложить видеоролик длительностью от 1 до 3
                                минут
                                со вставкой интро и аутро в Ленту приложения Кардо, в котором необходимо отразить не
                                менее
                                одного направления проекта («Брейкинг (Breaking)», «Паркур (Parkour)», «Фриран
                                (Freerunning)»,
                                «Воркаут (Workout)», «Хип-хоп (Hip-hop)», «Граффити (Graffiti)», «Диджеинг (Djing)»,
                                «Трикинг (Tricking)», «Скейтбординг (Skateboarding)», «Веломотоэкстрим (BMX)»,
                                «Экстремальный самокат (Kickscootering)». Конкурс-премии. — Необходимый материал в виде
                                аутро и интро каждый участник скачивает самостоятельно с сайта Конкурс-премии.
                                Данная вставка является обязательной. — Авторство на создание и монтаж видеоролика
                                должно
                                принадлежать исключительно участнику Видеоконкурса. Подробное описание и критерии оценок
                                смотри в положении. КРИТЕРИИ ОТБОРА: — операторская работа (композиция и постановка
                                кадра,
                                световые решения, правильность фокусировки, правильность экспозиции кадра — отсутствие
                                пересветов и завалов в тёмное); — монтаж видеоролика (соблюдение основных принципов
                                монтажа,
                                качество визуальных эффектов, качество аудиоэффектов, цветокоррекция); — оригинальность
                                (использование различных приёмов в съёмке, монтаже, саунд-дизайне). — режиссёрская
                                работа
                                (наличие сюжета, работа с актёрами, обоснованность монтажных решений, гармоничность и
                                целостность
                                видеоролика). ДРУГИЕ ТРЕБОВАНИЯ: — Ролик должен быть в разрешении 1920 × 1080 точек
                                (пикселей). — Участие автора в сюжете (сюжетах) видеоролика необязательно. — В
                                видеоролике
                                необходимо чётко и понятно отразить не менее одного направления проекта.
                                — Участники Видеоконкурса для заявки сами определяют жанр видеоролика.
                                Продолжительность:
                                1–3 минуты. За несоблюдение продолжительности видеоролика — штраф.
                            </p>
                            <button
                                onClick={() => setPopup(!popup)}
                                className={styles.popupButton}
                                type="button"
                            >
                                Закрыть
                            </button>
                        </div>
                    )}
            </section>
        </LayoutMain>
    );
};

export default OnlineSelectionPage;
