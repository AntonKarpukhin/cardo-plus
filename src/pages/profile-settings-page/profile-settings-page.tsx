import { useState } from 'react';
import {
    FooterAuthorization, HeaderAuthorization, LayoutMain, SettingsItems,
} from '../../components';
import { settingsData } from '../../utils/data';
import styles from './profile-settings-page.module.css';

const ProfileSettingsPage = () => {
    const [notifications, setNotifications] = useState<boolean>(false);

    const handleNotificationsChange = () => {
        setNotifications(!notifications);
    };

    return (
        <LayoutMain>
            <section className={styles.ProfileSettings}>
                <div className={styles.wrapper}>
                    <HeaderAuthorization text="Настройки" path="/profile" status="back" />
                    <SettingsItems
                        items={settingsData}
                        switcher={{ notifications }}
                        changeParameters={{ handleNotificationsChange }}
                    />
                </div>
                <FooterAuthorization />
            </section>
        </LayoutMain>
    );
};

export default ProfileSettingsPage;
