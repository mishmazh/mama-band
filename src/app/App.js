import './styles/index.scss';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import Header from 'widgets/Header/Header';
import AboutPage from 'pages/AboutPage/AboutPage';
import LivePage from 'pages/LivePage/LivePage';
import DiscographyPage from 'pages/DiscographyPage/DiscographyPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import { MembersPage } from 'pages/MembersPage';
import { GalleryPage } from 'pages/GalleryPage';

const App = () => {
    return (
        <div className="app">
            <Header />
            <Suspense>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/members/*" element={<MembersPage />} />
                    <Route path="/live" element={<LivePage />} />
                    <Route path="/gallery" element={<GalleryPage />} />
                    <Route path="/discography" element={<DiscographyPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
