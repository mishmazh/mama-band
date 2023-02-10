import './styles/index.scss';
import AppRouter from './router/AppRouter';
import Navbar from '../widgets/components/Navbar/Navbar';
import MobileNavbar from '../widgets/components/MobileNavbar/MobileNavbar';

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <MobileNavbar />
            <AppRouter />
        </div>
    );
};

export default App;
