import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import {
    FooterAuthorization, LayoutMain, ProgramsButtonDate, ProgramsCard, ProgramsPopup,
} from '../../components';
import styles from './programs-page.module.css';
import { programsData } from '../../utils/data';
import { useProgramsStore } from '../../store/programs-slice';
import { ProgramsPopupProps } from '../../components/programs-popup/programs-popup.props';

const ProgramsPage = () => {
    const [dateActive, setDateActive] = useState<number>(programsData[0]);
    const [program, setProgram] = useState<string>('');
    const [programFocus, setProgramFocus] = useState<boolean>(false);
    const [direction, setDirection] = useState<string>('');
    const [directionFocus, setDirectionFocus] = useState<boolean>(false);
    const [popup, setPopup] = useState<boolean>(false);
    const [popupData, setPopupData] = useState<ProgramsPopupProps>({});
    const { programs, getPrograms } = useProgramsStore();

    useEffect(() => {
        getPrograms(dateActive, program, direction);
    }, [dateActive, program, direction]);

    const handleDataChange = (data: number): void => {
        setDateActive(data);
    };

    const handleProgramChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setProgram(event.target.value);
        setTimeout(() => {
            event.target.blur();
        }, 100);
    };

    const handleSelectFocus = () => {
        setProgramFocus(true);
    };

    const handleSelectBlur = () => {
        setProgramFocus(false);
    };

    const handleDirectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setDirection(event.target.value);
        setTimeout(() => {
            event.target.blur();
        }, 100);
    };

    const handleDirectionFocus = () => {
        setDirectionFocus(true);
    };

    const handleDirectionBlur = () => {
        setDirectionFocus(false);
    };

    const openPopup = (data: ProgramsPopupProps) => {
        setPopup(true);
        setPopupData(data);
    };

    const closePopup = () => {
        setPopup(false);
        setPopupData({});
    };

    return (
        <LayoutMain>
            <section className={styles.ProgramsPage}>
                <h2 className={styles.title}>ЧТО ВАС ЖДЁТ?</h2>
                <div className={styles.wrapperButton}>
                    {programsData.map((program) => (
                        <ProgramsButtonDate
                            date={program}
                            key={program}
                            active={dateActive === program}
                            handleDataChange={handleDataChange}
                        />
                    ))}
                </div>

                <div className={styles.wrapperArrow}>
                    <div className={cn(styles.selectContainer, {
                        [styles.selectContainerActive]: programFocus,
                    })}
                    >
                        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                        <label htmlFor="program">
                            <select
                                className={styles.select}
                                id="program"
                                value={program}
                                onChange={handleProgramChange}
                                onFocus={handleSelectFocus}
                                onBlur={handleSelectBlur}
                            >
                                <option value="">Программа</option>
                                <option value="Видеоконкурс">Видеоконкурс</option>
                                <option value="Грантовый конкурс">Грантовый конкурс</option>
                                <option value="Диалоговая программа">Диалоговая программа</option>
                                <option value="Досуговая программа">Досуговая программа</option>
                            </select>
                        </label>
                    </div>
                </div>

                <div className={styles.wrapperArrow}>
                    <div
                        className={cn(styles.selectContainer, {
                            [styles.selectContainerActive]: directionFocus,
                        })}
                    >
                        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                        <label htmlFor="direction">
                            <select
                                className={styles.select}
                                id="direction"
                                value={direction}
                                onChange={handleDirectionChange}
                                onFocus={handleDirectionFocus}
                                onBlur={handleDirectionBlur}
                            >
                                <option value="">Направление</option>
                                <option value="Брейкинг">Брейкинг</option>
                                <option value="Воркаут">Воркаут</option>
                                <option value="Диджеинг">Диджеинг</option>
                                <option value="Граффити">Граффити</option>
                            </select>
                        </label>
                    </div>
                </div>
                {programs.length > 1 ? (
                    <div className={styles.wrapperData}>
                        {programs.map((program, index) => (
                            <ProgramsCard card={program} key={`${program.title} ${index + 1}`} openPopup={openPopup} />
                        ))}
                    </div>
                ) : (
                    <div className={styles.err}>
                        <p className={styles.errTitle}>Событий не найдено</p>
                        <p className={styles.errSubtitle}>Попробуйте изменить параметры поиска</p>
                    </div>
                )}
                <FooterAuthorization className={styles.footer} />
                {
                    popup
                    && (
                        <div className={styles.overl}>
                            <ProgramsPopup
                                closePopup={closePopup}
                                type={popupData.type}
                                title={popupData.title}
                                date={popupData.date}
                                direction={popupData.direction}
                                location={popupData.location}
                                description={popupData.description}
                            />
                        </div>
                    )
                }
            </section>
        </LayoutMain>
    );
};

export default ProgramsPage;
