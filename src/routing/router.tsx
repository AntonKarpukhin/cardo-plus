import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { NotFoundPage, ErrorPage } from '../pages';
import { Loading } from '../components';

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
const OnlineSelectionsPage = lazy(() => import('../pages/online-selesctions-page/online-selesctions-page'));
const ResetPasswordPage = lazy(() => import('../pages/reset-password-page/reset-password-page'));

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Suspense><StartPage /></Suspense>,
    },
    {
        path: '/home',
        element: <Suspense><HomePage /></Suspense>,
        // element: <Suspense fallback={<Loading />}><HomePage /></Suspense>,
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
        path: '/forgotPassword',
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
        path: '/onlineSelections',
        element: <Suspense><OnlineSelectionsPage /></Suspense>,
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
        path: '/resetPassword',
        element: <Suspense><ResetPasswordPage /></Suspense>,
        errorElement: <ErrorPage />,
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
]);
