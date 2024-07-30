import { ValidationResult, Validator, GetValidator } from './validator-types';

export const validateValue = <T>(
    value: T,
    validators: Validator<T>[],
): ValidationResult => {
    let validationResult: ValidationResult = null;
    let i = 0;

    while (validationResult === null && i < validators.length) {
        const res = validators[i](value);
        if (res) {
            validationResult = res;
        }
        i++;
    }

    return validationResult;
};

export const required: GetValidator<string, string> = (
    message = 'Обязательное поле',
) => (value) => (value ? null : message);

function createValidator<T>(
    regex: RegExp,
    errorMessage: string,
): Validator<T> {
    return (value: T) => (regex.test(value.toString()) ? null : errorMessage);
}

export const emailValidator: Validator<string> = createValidator(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    'Пожалуйста, введите действительный email',
);

export const phoneValidator: Validator<string> = createValidator(
    /^\+\d{10}$/,
    'Неверный формат номера телефона',
);

export const passwordValidator: Validator<string> = createValidator(
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
    'Пароль должен состоять не менее, чем из 6 символов',
);

export const nameValidator: Validator<string> = createValidator(
    /^[a-zA-Zа-яА-ЯёЁ]{3,}$/,
    'Пожалуйста, введите имя',
);

export const surnameValidator: Validator<string> = createValidator(
    /^[a-zA-Zа-яА-ЯёЁ]{3,}$/,
    'Пожалуйста, введите фамилию',
);

export const patronomicValidator: Validator<string> = createValidator(
    /^[a-zA-Zа-яА-ЯёЁ]{3,}$/,
    'Пожалуйста, введите отчество',
);

export const birthdateValidator: Validator<string> = createValidator(
    /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/\d{4}$/,
    'Пожалуйста, введите дату рождения',
);

export const countryValidator: Validator<string> = createValidator(
    /^[a-zA-Zа-яА-ЯёЁ]{3,}$/,
    'Пожалуйста, введите страну',
);

export const regionValidator: Validator<string> = createValidator(
    /^[a-zA-Zа-яА-ЯёЁ]{3,}$/,
    'Пожалуйста, введите повторно страну и регион',
);

export const cityValidator: Validator<string> = createValidator(
    /^[a-zA-Zа-яА-ЯёЁ]{3,}$/,
    'Пожалуйста, введите город',
);
