import './styles/index.scss';
import AppRouter from './router/AppRouter';
import Navbar from '../widgets/ui/Navbar/Navbar';
import MobileNavbar from '../widgets/ui/MobileNavbar/MobileNavbar';

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
