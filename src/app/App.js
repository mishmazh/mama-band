import './styles/index.scss';
import AppRouter from './router/AppRouter';
import Navbar from 'widgets/ui/Navbar/Navbar';
import MobileNavbar from 'widgets/ui/MobileNavbar/MobileNavbar';
import { useEffect, useState } from 'react';

const App = () => {
    const [isFade, setIsFade] = useState(false);

    const toggleFade = () => {
        if (window.scrollY > 0) {
            setIsFade(true);
        } else {
            setIsFade(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleFade, true);

        return () => {
            window.removeEventListener('scroll', toggleFade, true);
        };
    }, []);

    return (
        <div className="app">
            <Navbar isFade={isFade} />
            <MobileNavbar isFade={isFade} />
            <AppRouter/>
        </div>
    );
};

export default App;
