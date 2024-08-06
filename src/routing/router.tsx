import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { NotFoundPage, ErrorPage } from '../pages';
import { Loading } from '../components';

const StartPage = lazy(() => import('../pages/start-page/start-page'));
const HomePage = lazy(() => import('../pages/home-page/home.page'));
const CreateProfile = lazy(() => import('../pages/create-profile-page/create-profile-page'));
const CompleteProfilePage = lazy(() => import('../pages/complete-profile-page/complete-profile-page'));
const FillingProfile = lazy(() => import('../pages/filling-profile/filling-profile'));
const LoginPage = lazy(() => import('../pages/login-page/login-page'));
const RecoverPasswordPage = lazy(() => import('../pages/recover-password-page/recover-password-page'));
const CheckEmailPage = lazy(() => import('../pages/check-email-page/check-email-page'));
const NewPasswordPage = lazy(() => import('../pages/new-password-page/new-password-page'));
const CompleteNewPasswordPage = lazy(() => import('../pages/complete-new-password-page/complete-new-password-page'));

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
        errorElement: <NotFoundPage />,
    },
    {
        path: '/fillingProfile',
        element: <Suspense><FillingProfile /></Suspense>,
        errorElement: <NotFoundPage />,
    },
    {
        path: '/completeProfile',
        element: <Suspense><CompleteProfilePage /></Suspense>,
        errorElement: <NotFoundPage />,
    },
    {
        path: '/login',
        element: <Suspense><LoginPage /></Suspense>,
        errorElement: <NotFoundPage />,
    },
    {
        path: '/login/forgotPassword',
        element: <Suspense><RecoverPasswordPage /></Suspense>,
        errorElement: <NotFoundPage />,
    },
    {
        path: '/checkEmail',
        element: <Suspense><CheckEmailPage /></Suspense>,
        errorElement: <NotFoundPage />,
    },
    {
        path: '/newPassword',
        element: <Suspense><NewPasswordPage /></Suspense>,
        errorElement: <NotFoundPage />,
    },
    {
        path: '/newPasswordComplete',
        element: <Suspense><CompleteNewPasswordPage /></Suspense>,
        errorElement: <NotFoundPage />,
    },
    {
        path: '*',
        element: <ErrorPage />,
    },
]);
