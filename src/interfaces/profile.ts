export interface IUserProfile {
    email: string;
    name: string;
    surname: string;
    patronymic?: string;
    noMiddleName?: boolean;
    dateOfBirth?: string;
    country?: string;
    region?: string;
    city?: string;
    phoneNumber?: string;
    gender?: string;
    profilePhoto?: string;
    network?: string;
    role?: string;
}
