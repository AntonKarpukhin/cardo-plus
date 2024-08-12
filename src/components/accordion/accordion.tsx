import cn from 'classnames';
import { AccordionProps } from './accordion.props';
import styles from './accordion.module.css';

const Accordion = ({
    partners, isOpen, setIsOpen, className, ...props
}: AccordionProps) => {
    const toggleAccordion = (counter: number) => {
        if (isOpen === counter) {
            setIsOpen(0);
        } else {
            setIsOpen(counter);
        }
    };

    return (
        <div className={cn(styles.Accordion, className)} {...props}>
            {partners.map((item) => (
                <div key={item.key}>
                    <div className={styles.wrapper}>
                        <button type="button" className={styles.accordionButton} onClick={() => toggleAccordion(item.key)}>
                            <span>{item.title}</span>
                        </button>
                        <span>{isOpen === item.key ? '▲' : '▼'}</span>
                    </div>
                    {isOpen === item.key && <div className={styles.accordionSpanOpen}>{item.description}</div>}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
