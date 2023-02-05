import './styles/index.scss';
import Header from 'widgets/Header/Header';
import MobileNavigation from 'widgets/MobileNavigation';
import AppRouter from "./router/AppRouter";

const App = () => {
    return (
        <div className="app">
            <Header />
            <MobileNavigation />
            <AppRouter />
        </div>
    );
};

export default App;
