import cn from 'classnames';
import { ProfileImageProps } from './profile-image.props';
import styles from './profile-image.module.css';

const ProfileImage = ({
    img, name, email, type, className, ...props
}: ProfileImageProps) => {
    const a = 10;
    return (
        <div
            className={cn(styles.ProfileImage, className, {
                [styles.ProfileImageInformation]: type === 'information',
            })}
            {...props}
        >
            <div className={cn(styles.wrapper, {
                [styles.wrapperInformation]: type === 'information',
            })}
            >
                <img src={img} alt="Аватар" />
                <div>
                    {type === 'profile' ? (
                        <>
                            <p className={styles.name}>{name}</p>
                            <p className={styles.email}>{email}</p>
                        </>
                    ) : <img src="edit.svg" alt="Карандаш" />}
                </div>
            </div>
        </div>
    );
};

export default ProfileImage;
