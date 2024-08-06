import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { NotFoundPage, ErrorPage } from '../pages';
import { Loading } from '../components';

const StartPage = lazy(() => import('../pages/start-page/start-page'));
const HomePage = lazy(() => import('../pages/home-page/home.page'));
const CreateProfile = lazy(() => import('../pages/create-profile-page/create-profile-page'));
const CompleteProfilePage = lazy(() => import('../pages/complete-profile-page/complete-profile-page'));
const FillingProfile = lazy(() => import('../pages/filling-profile/filling-profile'));

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
        path: '*',
        element: <ErrorPage />,
    },
]);
