import React, { useState } from 'react';
import {
    required, validateValue,
    birthdateValidator,
} from '../../utils/validators';
import styles from './app.module.css';
import { Paragraph, Input } from '../index';

const App = () => {
    const [name, setName] = useState<string>('');
    const [nameError, setNameError] = useState<string | null>(null);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setName(newValue);
        if (newValue === '') {
            setNameError(null);
        } else {
            const error = validateValue(newValue, [required(), birthdateValidator]);
            setNameError(error);
        }
    };

    return (
        <div className={styles.app}>
            Hello World!
            <Paragraph color="red" text="Создайте аккаунт, чтобы выкладывать работы и общаться в сообществе единомышленников" />
            <Input type="text" placeholder="ДД/ММ/ГГГГ" value={name} error={!!nameError} errorText={nameError || ''} onChange={handleNameChange} />
            <Input type="text" placeholder="Я плейсхолдер" value="Я Петя и я задизаблен" disabled />
        </div>
    );
};

export default App;
