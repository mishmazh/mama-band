import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from './routeConfig';
import PageLoader from 'widgets/ui/PageLoader/PageLoader';

const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routeConfig).map(({ path, element }, key) => {
                    return <Route path={path} element={element} key={key} />;
                })}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;