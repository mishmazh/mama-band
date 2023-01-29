import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import AboutPage from './pages/AboutPage/AboutPage';
import MembersPage from './pages/MembersPage/MembersPage';
import LivePage from './pages/LivePage/LivePage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import DiscographyPage from './pages/DiscographyPage/DiscographyPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const App = () => {
    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/members/*" element={<MembersPage />} />
                <Route path="/live" element={<LivePage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/discography" element={<DiscographyPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
};

export default App;