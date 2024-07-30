import React, { useState } from 'react';
import {
    required, validateValue,
    birthdateValidator,
} from '../../utils/validators';
import { LayoutMain } from '../../components';
import { HomePage } from '../../pages';

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
        <LayoutMain>
            <HomePage />
        </LayoutMain>
    );
};

export default App;
