import { useEffect } from 'react';
import {
    FooterAuthorization,
    HeaderAuthorization, ProfileImage, ProfileSlider, SettingsItems,
} from '../../components';
import { profileData } from '../../utils/data';
import styles from './profile-page.module.css';
import { useSelectionsStore } from '../../store/selections-slice';
import { useProfileStore } from '../../store/profile-slice';

const ProfilePage = () => {
    const { selections, loadSelections } = useSelectionsStore();
    const { profile, getProfile } = useProfileStore();

    useEffect(() => {
        loadSelections();
        getProfile();
    }, []);

    return (
        <section className={styles.ProfilePage}>
            <div className={styles.wrapper}>
                <HeaderAuthorization text="Профиль" />
                <ProfileImage img={profile.profilePhoto} type="profile" name={profile.name} email={profile.email} />
                <ProfileSlider sliderItems={selections} />
                <SettingsItems items={profileData} />
            </div>
            <FooterAuthorization />
        </section>
    );
};

export default ProfilePage;
