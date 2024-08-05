import React, { useState } from 'react';

interface useInputState {
    [key: string]: string;
}

const useInput = () => {
    const [input, setInput] = useState<useInputState>({});

    const handleUsersInfo = (value: string, datatype: string | undefined): void => {
        if (typeof datatype === 'string') {
            setInput((prevState) => {
                if (value.length === 0) {
                    // Если значение пустое, удаляем ключ
                    const { [datatype]: _, ...rest } = prevState;
                    return rest;
                }
                // Иначе обновляем или добавляем ключ
                return { ...prevState, [datatype]: value };
            });
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { value, dataset } = event.target;
        handleUsersInfo(value, dataset.type);
    };

    return { input, handleInputChange };
};

export default useInput;
