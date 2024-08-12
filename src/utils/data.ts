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

export const programsData = [22, 23, 24, 25];

export const oldDataResult = [2, 3, 4, 5, 6];

export const oldDataInfo = [
    {
        directions: 4,
        countries: 45,
        participants: 1985,
    },

    {
        directions: 5,
        countries: 60,
        participants: 2211,
    },
    {
        directions: 7,
        countries: 70,
        participants: 2654,
    },
    {
        directions: 8,
        countries: 78,
        participants: 2987,
    },
    {
        directions: 10,
        countries: 92,
        participants: 3377,
    },

];

export const partners = [
    {
        title: 'АНО <<Россия — страна возможностей>>',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
            + 'Adipisci assumenda consequuntur cupiditate et eveniet, expedita laudantium molestiae mollitia, '
            + 'nam omnis quasi quia, rerum voluptatum! Ducimus, molestiae, velit? Amet, eligendi, iusto.\n',
        key: 1,
    },
    {
        title: 'Правительство ставропольского края',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
            + 'Adipisci assumenda consequuntur cupiditate et eveniet, expedita laudantium molestiae mollitia, '
            + 'nam omnis quasi quia, rerum voluptatum! Ducimus, molestiae, velit? Amet, eligendi, iusto.\n',
        key: 2,
    },
    {
        title: 'Общероссийская организация <<Улицы России>>',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
            + 'Adipisci assumenda consequuntur cupiditate et eveniet, expedita laudantium molestiae mollitia, '
            + 'nam omnis quasi quia, rerum voluptatum! Ducimus, molestiae, velit? Amet, eligendi, iusto.\n',
        key: 3,
    },
    {
        title: 'Северо-Кавказский федеральный университет',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
            + 'Adipisci assumenda consequuntur cupiditate et eveniet, expedita laudantium molestiae mollitia, '
            + 'nam omnis quasi quia, rerum voluptatum! Ducimus, molestiae, velit? Amet, eligendi, iusto.\n',
        key: 4,
    },
];

export const organizers = [
    {
        title: 'Разгон',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
            + 'Adipisci assumenda consequuntur cupiditate et eveniet, expedita laudantium molestiae mollitia, '
            + 'nam omnis quasi quia, rerum voluptatum! Ducimus, molestiae, velit? Amet, eligendi, iusto.\n',
        key: 1,
    },
    {
        title: 'Кардо',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
            + 'Adipisci assumenda consequuntur cupiditate et eveniet, expedita laudantium molestiae mollitia, '
            + 'nam omnis quasi quia, rerum voluptatum! Ducimus, molestiae, velit? Amet, eligendi, iusto.\n',
        key: 2,
    },
    {
        title: 'Союз русских художников',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
            + 'Adipisci assumenda consequuntur cupiditate et eveniet, expedita laudantium molestiae mollitia, '
            + 'nam omnis quasi quia, rerum voluptatum! Ducimus, molestiae, velit? Amet, eligendi, iusto.\n',
        key: 3,
    },
    {
        title: 'PaulTheFlow',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
            + 'Adipisci assumenda consequuntur cupiditate et eveniet, expedita laudantium molestiae mollitia, '
            + 'nam omnis quasi quia, rerum voluptatum! Ducimus, molestiae, velit? Amet, eligendi, iusto.\n',
        key: 4,
    },
];

export const onlineSelection = [
    {
        status: 'close',
        title: 'Регистрация',
        startDate: 'Начало: 19.04.2024',
        endDate: 'Конец: 22.07.2024',
    },
    {
        status: 'waiting',
        title: 'ТОП 24 (12)',
        startDate: 'Начало: 19.04.2024',
        endDate: 'Конец: 22.07.2024',
    },
    {
        status: 'waiting',
        title: 'ТОП 4 (3)',
        startDate: 'Начало: 19.04.2024',
        endDate: 'Конец: 22.07.2024',
    },
];

export const testofPlace = 'Москва, Российская Федерация\n'
    + 'Саратов, Саратовская область\n'
    + 'Чита, Забайкальский край\n'
    + 'Сыктывкар, Республика Коми\n'
    + 'Барнаул, Алтайский край\n'
    + 'Ленинградская область, г. Тосно \n'
    + 'Нижегородская область, Нижний Новгород \n'
    + 'Камчатский край, Петропавловск-Камчатский \n'
    + 'Алтайский край, Барнаул \n'
    + 'Сахалинская область, Южно-Сахалинск\n'
    + 'Оренбургская область, Оренбург\n'
    + 'Республика Коми, Сыктывкар \n'
    + 'Санкт-Петербург\n'
    + 'Челябинская область, Челябинск\n'
    + 'Запорожская область, Мелитополь \n'
    + 'Смоленская область, Смоленск \n'
    + 'Ямало-Ненецкий АО, Ноябрьск \n'
    + 'Краснодарский край, Краснодар \n'
    + 'Кировская область, Киров\n'
    + 'Республика Татарстан, Казань \n'
    + 'Красноярский край, Красноярск \n'
    + 'Кемеровская область, Кемерово';
