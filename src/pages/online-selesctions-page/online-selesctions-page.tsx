import React, { useState, useEffect } from 'react';
import { HeaderAuthorization } from '../../components';
import OnlineSelectionsItem from '../../components/online-selections-item/online-selections-item';
import styles from './online-selesctions-page.module.css';
import { useOnlineSelectionsStore } from '../../store/online-selections-slice';

const OnlineSelectionsPage = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [modal, setModal] = useState<boolean>(false);
    const [modalText, setModalText] = useState<string | null>(null);
    const { selections, loadSelections } = useOnlineSelectionsStore();

    useEffect(() => {
        loadSelections();
    }, [loadSelections]);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const toggleModal = () => {
        setModal(!modal);
    };

    const formatText = (text: string) => text.split('\n').map((item) => (
        <React.Fragment key={item}>
            {item}
            <br />
        </React.Fragment>
    ));

    return (
        <section className={styles.OnlineSelectionsPage}>
            <div className={styles.wrapper}>
                {modal ? (<HeaderAuthorization path="/onlineSelections" onClick={toggleModal} status="back" />)
                    : (<HeaderAuthorization path="/profile" status="back" />)}
                {modal ? (
                    <div className={styles.modal}>
                        <h2 className={styles.modalTitle}>Задание для участников</h2>
                        <p className={styles.modalText}>{formatText(modalText)}</p>
                    </div>
                ) : (
                    <>
                        <h2 className={styles.title}>Онлайн отбор на соревнования</h2>
                        <div>
                            <button
                                type="button"
                                onClick={toggleAccordion}
                                onKeyDown={(e) => { if (e.key === 'Enter') toggleAccordion(); }}
                                className={styles.accordionButton}
                            >
                                Описание конкурса
                                <img src="./accordion.png" alt="развернуть" className={styles.accordionArrow} />
                            </button>
                            {isOpen && (
                                <div className={styles.accordionText}>
                                    Покажи свой скилл по каждому направлению соревнований и попади на гранд-финал
                                    в легендарные батлы исамое масштабное событие улиц!
                                    Регистрируйся на участие в конкурсе и пройди по результатам онлайн-отбора в ТОП-24
                                    категорий про, или ТОП-12 других категорий!
                                    По итогу этого этапа отбора участники, вошедшие, в ТОП-4 или ТОП-3
                                    (в зависимости от направлений, смотри внимательно в положении) получат путёвку «всё включено»
                                    (питание, проживание, проезд) на гранд-финал 22–25 августа в Ставрополь!
                                </div>
                            )}
                        </div>
                        <OnlineSelectionsItem selectionsItems={selections} toggleModal={toggleModal} setModalText={setModalText} />
                    </>
                )}
            </div>
        </section>
    );
};

export default OnlineSelectionsPage;
