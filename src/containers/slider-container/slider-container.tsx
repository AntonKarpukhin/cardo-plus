import React, { FC, useState } from 'react';
import ItemSlide from '../../components/item-slide/item-slide';
import styles from './slider-container.module.css';
import image1 from '../../../public/slider-screen.png';
import image2 from '../../../public/slider-events.png';
import image3 from '../../../public/slider-video.png';

const SliderContainer: FC = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const slides = [
        {
            id: 1,
            image: image1,
            title: 'Лента работ участников',
            description: 'Смотри конкурсные работы участников и загружай свои',
            link: false,
            status: null,
        },
        {
            id: 2,
            image: image2,
            title: 'Программа мероприятий',
            description: 'Выбирай интересные тебе мероприятия и подавай заявку',
            link: false,
            status: 'back',
        },
        {
            id: 3,
            image: image3,
            title: 'Онлайн-трансляции с Гранд-финала',
            description: 'Если не сможешь быть на мероприятии очно — подключайся онлайн',
            link: true,
            status: 'back',
        },
    ];

    const handleDotClick = (index: number) => {
        setCurrentSlide(index);
    };

    const handleDotKeyPress = (event: React.KeyboardEvent, index: number) => {
        if (event.key === 'Enter' || event.key === ' ') {
            setCurrentSlide(index);
        }
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const minSwipeDistance = 50;

        if (distance > minSwipeDistance) {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }

        if (distance < -minSwipeDistance) {
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        }
    };

    return (
        <div className={styles.sliderContainer}>
            <div
                className={styles.slides}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
                    >
                        <ItemSlide
                            image={slide.image}
                            title={slide.title}
                            description={slide.description}
                            link={slide.link}
                            status={slide.status}
                        />
                    </div>
                ))}
            </div>
            <div className={styles.dots}>
                {slides.map((slide, index) => (
                    <span
                        key={slide.id}
                        className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
                        onClick={() => handleDotClick(index)}
                        onKeyPress={(event) => handleDotKeyPress(event, index)}
                        tabIndex={0}
                        role="button"
                        aria-label={`Слайд ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default SliderContainer;
