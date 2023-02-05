import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from './routeConfig';

const AppRouter = () => {
    return (
        <Suspense>
            <Routes>
                {Object.values(routeConfig).map(({ path, element }, key) => {
                    return <Route path={path} element={element} key={key} />;
                })}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;