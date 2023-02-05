import HomePage from 'pages/HomePage/HomePage';
import AboutPage from 'pages/AboutPage/AboutPage';
import { MembersPage } from 'pages/MembersPage';
import LivePage from 'pages/LivePage/LivePage';
import DiscographyPage from 'pages/DiscographyPage/DiscographyPage';
import { GalleryPage } from 'pages/GalleryPage';
import NotFound from 'features/NotFound/NotFound';

export const routeConfig = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/about',
        element: <AboutPage />,
    },
    {
        path: '/members/*',
        element: <MembersPage />,
    },
    {
        path: '/live',
        element: <LivePage />,
    },
    {
        path: '/gallery',
        element: <GalleryPage />,
    },
    {
        path: '/discography',
        element: <DiscographyPage />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
];
