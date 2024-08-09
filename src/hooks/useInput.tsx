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

    const setDefaultValue = (obj: { [key: string]: any }) => {
        Object.entries(obj).forEach(([key, value]) => {
            if (value !== undefined) {
                handleUsersInfo(value.toString(), key);
            }
        });
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { value, dataset } = event.target;
        handleUsersInfo(value, dataset.type);
    };

    return { input, handleInputChange, setDefaultValue };
};

export default useInput;
