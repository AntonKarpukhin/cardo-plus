export interface ISettingsData {
    name: string,
    type: 'arrow' | 'switcher';
    path: string;
}

export const settingsData: ISettingsData[] = [
    { name: 'Моя информация', type: 'arrow', path: '/profileInformation' },
    { name: 'Пароль', type: 'arrow', path: '/resetPassword' },
    { name: 'Уведомления', type: 'switcher', path: '' },
    { name: 'Язык приложения', type: 'arrow', path: '' },
];

export const profileData: ISettingsData[] = [
    { name: 'Моё портфолио', type: 'arrow', path: '' },
    { name: 'Мои достижения', type: 'arrow', path: '' },
    { name: 'Обо мне', type: 'arrow', path: '' },
    { name: 'Социальные сети', type: 'arrow', path: '' },
];

export const testof = 'Владимирская область, Владимир (25.05.24)\n'
    + 'Московская область, Дмитров (14.07.24)\n'
    + 'Липецкая область, Липецк (29.06.24)\n'
    + 'Ярославская область, Углич (30.06.24)\n'
    + 'Калининградская область, Калининград (15.06.24–16.06.24)\n'
    + 'Ленинградская область, г. Тосно (30.06.24)\n'
    + 'Нижегородская область, Нижний Новгород (15.06.24)\n'
    + 'Камчатский край, Петропавловск-Камчатский (29.06.24)\n'
    + 'Алтайский край, Барнаул (29.06.24)\n'
    + 'Сахалинская область, Южно-Сахалинск (29.06.24)\n'
    + 'Оренбургская область, Оренбург (29.06.24)\n'
    + 'Республика Коми, Сыктывкар (12.06.24)\n'
    + 'Санкт-Петербург (07.07.24–08.07.24)\n'
    + 'Москва (29.06.24)\n'
    + 'Саратовская область, Саратов (07.06.24)\n'
    + 'Забайкальский край, Чита (12.06.24)\n'
    + 'Челябинская область, Челябинск (10.08.24)\n'
    + 'Запорожская область, Мелитополь (Июль) (точная дата на согласовании)\n'
    + 'Смоленская область, Смоленск (29.06.24)\n'
    + 'Ямало-Ненецкий АО, Ноябрьск (29.06.24)\n'
    + 'Краснодарский край, Краснодар (29.06.24)\n'
    + 'Кировская область, Киров (29.06.24)\n'
    + 'Республика Татарстан, Казань (29.06.24)\n'
    + 'Красноярский край, Красноярск (25.05.24)\n'
    + 'Кемеровская область, Кемерово (12.06.24)';
