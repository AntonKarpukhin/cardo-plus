import cn from 'classnames';
import React, { useState } from 'react';
import { HeaderAuthorization, LayoutMain } from '../../components';
import { onlineSelection } from '../../utils/data';
import styles from './online-selection-page.module.css';

const OnlineSelectionPage = () => {
    const [accordion, setAccordion] = useState(false);
    const [popup, setPopup] = useState(true);

    const formatText = (text: string) => text.split('\n').map((item) => (
        <React.Fragment key={item}>
            {item}
            <br />
        </React.Fragment>
    ));

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
                                                        [styles.radiusComplete]: item.status === 'Завершён',
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
                                {formatText('— Заполнить заявку на официальном сайте; — Выложить видеоролик длительностью от 1 до 3\n'
                                    + 'минут\n'
                                    + 'со вставкой интро и аутро в Ленту приложения Кардо, в котором необходимо отразить не\n'
                                    + 'менее\n'
                                    + 'одного направления проекта («Брейкинг (Breaking)», «Паркур (Parkour)», «Фриран\n'
                                    + '(Freerunning)»,\n'
                                    + '«Воркаут (Workout)», «Хип-хоп (Hip-hop)», «Граффити (Graffiti)», «Диджеинг (Djing)»,\n'
                                    + '«Трикинг (Tricking)», «Скейтбординг (Skateboarding)», «Веломотоэкстрим (BMX)»,\n'
                                    + ' «Экстремальный самокат (Kickscootering)». Конкурс-премии. — Необходимый материал в виде\n'
                                    + 'аутро и интро каждый участник скачивает самостоятельно с сайта Конкурс-премии.\n'
                                    + 'Данная вставка является обязательной. — Авторство на создание и монтаж видеоролика\n'
                                    + 'должно\n'
                                    + 'принадлежать исключительно участнику Видеоконкурса. Подробное описание и критерии оценок\n'
                                    + 'смотри в положении. КРИТЕРИИ ОТБОРА: — операторская работа (композиция и постановка\n'
                                    + 'кадра,\n'
                                    + 'световые решения, правильность фокусировки, правильность экспозиции кадра — отсутствие\n'
                                    + 'пересветов и завалов в тёмное); — монтаж видеоролика (соблюдение основных принципов\n'
                                    + 'монтажа,\n'
                                    + 'качество визуальных эффектов, качество аудиоэффектов, цветокоррекция); — оригинальность\n'
                                    + '(использование различных приёмов в съёмке, монтаже, саунд-дизайне). — режиссёрская\n'
                                    + 'работа\n'
                                    + '(наличие сюжета, работа с актёрами, обоснованность монтажных решений, гармоничность и\n'
                                    + 'целостность\n'
                                    + 'видеоролика). ДРУГИЕ ТРЕБОВАНИЯ: — Ролик должен быть в разрешении 1920 × 1080 точек\n'
                                    + '(пикселей). — Участие автора в сюжете (сюжетах) видеоролика необязательно. — В\n'
                                    + 'видеоролике\n'
                                    + 'необходимо чётко и понятно отразить не менее одного направления проекта.\n'
                                    + '— Участники Видеоконкурса для заявки сами определяют жанр видеоролика.\n'
                                    + 'Продолжительность:\n'
                                    + '1–3 минуты. За несоблюдение продолжительности видеоролика — штраф.')}

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
