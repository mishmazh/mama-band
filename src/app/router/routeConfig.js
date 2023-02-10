import HomePage from 'pages/HomePage/HomePage';
import { MembersPage } from 'pages/MembersPage';
import { LivePage } from 'pages/LivePage';
import { GalleryPage } from 'pages/GalleryPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import AboutPage from 'pages/AboutPage/AboutPage';
import { DiscographyPage } from 'pages/DiscographyPage';

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
        element: <NotFoundPage />,
    },
];
