import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { NotFoundPage, ErrorPage } from '../pages';

const StartPage = lazy(() => import('../pages/start-page/start-page'));
const HomePage = lazy(() => import('../pages/home-page/home.page'));
const CreateProfile = lazy(() => import('../pages/create-profile-page/create-profile-page'));
const CompleteProfilePage = lazy(() => import('../pages/complete-profile-page/complete-profile-page'));
const FillingProfile = lazy(() => import('../pages/filling-profile-page/filling-profile-page'));
const LoginPage = lazy(() => import('../pages/login-page/login-page'));
const RecoverPasswordPage = lazy(() => import('../pages/recover-password-page/recover-password-page'));
const CheckEmailPage = lazy(() => import('../pages/check-email-page/check-email-page'));
const NewPasswordPage = lazy(() => import('../pages/new-password-page/new-password-page'));
const CompleteNewPasswordPage = lazy(() => import('../pages/complete-new-password-page/complete-new-password-page'));
const ProfilePage = lazy(() => import('../pages/profile-page/profile-page'));
const ProfileSettingsPage = lazy(() => import('../pages/profile-settings-page/profile-settings-page'));
const RegionalSelectionsPage = lazy(() => import('../pages/regional-selections-page/regional-selections-page'));
const ProfileInformationPage = lazy(() => import('../pages/profile-information-page/profile-information-page'));
const ProgramsPage = lazy(() => import('../pages/programs-page/programs-page'));
const CardoMainPage = lazy(() => import('../pages/cardo-main-page/cardo-main-page'));
const RibbonPage = lazy(() => import('../pages/ribbon-page/ribbon-page'));
const ResetPaswordPage = lazy(() => import('../pages/reset-pasword-page/reset-pasword-page'));
const SpectatorRegistrationPage = lazy(() => import('../pages/spectator-registration-page/spectator-registration-page'));
const OnlineSelectionPage = lazy(() => import('../pages/online-selection-page/online-selection-page'));
const RegionalRegistrationPage = lazy(() => import('../pages/regional-registration-page/regional-registration-page'));

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Suspense><StartPage /></Suspense>,
    },
    {
        path: '/home',
        element: <Suspense><HomePage /></Suspense>,
    },
    {
        path: '/createProfile',
        element: <Suspense><CreateProfile /></Suspense>,
        errorElement: <ErrorPage />,
    },
    {
        path: '/fillingProfile',
        element: <Suspense><FillingProfile /></Suspense>,
        errorElement: <ErrorPage />,
    },
    {
        path: '/completeProfile',
        element: <Suspense><CompleteProfilePage /></Suspense>,
        errorElement: <ErrorPage />,
    },
    {
        path: '/login',
        element: <Suspense><LoginPage /></Suspense>,
        errorElement: <ErrorPage />,
    },
    {
        path: '/login/forgotPassword',
        element: <Suspense><RecoverPasswordPage /></Suspense>,
        errorElement: <ErrorPage />,
    },
    {
        path: '/checkEmail',
        element: <Suspense><CheckEmailPage /></Suspense>,
        errorElement: <ErrorPage />,
    },
    {
        path: '/newPassword',
        element: <Suspense><NewPasswordPage /></Suspense>,
        errorElement: <ErrorPage />,
    },
    {
        path: '/newPasswordComplete',
        element: <Suspense><CompleteNewPasswordPage /></Suspense>,
        errorElement: <ErrorPage />,
    },
    {
        path: '/profile',
        element: <Suspense><ProfilePage /></Suspense>,
        errorElement: <ErrorPage />,
    },
    {
        path: '/profileSettings',
        element: <Suspense><ProfileSettingsPage /></Suspense>,
        errorElement: <ErrorPage />,
    },
    {
        path: '/regionalSelections',
        element: <Suspense><RegionalSelectionsPage /></Suspense>,
        errorElement: <ErrorPage />,
    },
    {
        path: '/profileInformation',
        element: <Suspense><ProfileInformationPage /></Suspense>,
        errorElement: <ErrorPage />,
    },
    {
        path: '/program',
        element: <Suspense><ProgramsPage /></Suspense>,
        errorElement: <ErrorPage />,
    },
    {
        path: '/cardo',
        element: <Suspense><CardoMainPage /></Suspense>,
        errorElement: <ErrorPage />,
    },
    {
        path: '/ribbon',
        element: <Suspense><RibbonPage /></Suspense>,
        errorElement: <ErrorPage />,
    },
    {
        path: '/resetPassword',
        element: <Suspense><ResetPaswordPage /></Suspense>,
        errorElement: <ErrorPage />,
    },
    {
        path: '/spectatorRegistration',
        element: <Suspense><SpectatorRegistrationPage /></Suspense>,
        errorElement: <ErrorPage />,
    },
    {
        path: '/profile/onlineSelectionPage',
        element: <Suspense><OnlineSelectionPage /></Suspense>,
        errorElement: <ErrorPage />,
    },
    {
        path: '/regionalRegistration',
        element: <Suspense><RegionalRegistrationPage /></Suspense>,
        errorElement: <ErrorPage />,
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
]);
