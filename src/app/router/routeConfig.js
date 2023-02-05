import HomePage from 'pages/HomePage/HomePage';
import AboutPage from 'pages/AboutPage/AboutPage';
import { MembersPage } from 'pages/MembersPage';
import LivePage from 'pages/LivePage/LivePage';
import DiscographyPage from 'pages/DiscographyPage/DiscographyPage';
import { GalleryPage } from 'pages/GalleryPage';
import NotFound from 'features/NotFound/NotFound';

export const routeConfig = {
    MAIN: {
        path: '/',
        element: <HomePage />,
    },
    ABOUT: {
        path: '/about',
        element: <AboutPage />,
    },
    MEMBERS: {
        path: '/members/*',
        element: <MembersPage />,
    },
    LIVE: {
        path: '/live',
        element: <LivePage />,
    },
    GALLERY: {
        path: '/gallery',
        element: <GalleryPage />,
    },
    DISCOGRAPHY: {
        path: '/discography',
        element: <DiscographyPage />,
    },
    ROUTE: {
        path: '/:route',
        element: <HomePage />,
    },
    NOT_FOUND: {
        path: '*',
        element: <NotFound />,
    },
};
