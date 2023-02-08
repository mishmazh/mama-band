import './styles/index.scss';
import Header from 'widgets/Header/Header';
import AppRouter from './router/AppRouter';

const App = () => {
    return (
        <div className="app">
            <Header />
            <AppRouter />
        </div>
    );
};

export default App;
