import { memo, Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { routeConfig } from 'app/providers/RouteProvider/config/routeConfig';
import { Route, Routes } from 'react-router-dom';

export const AppRoute = () => (
    <Routes>
        {Object.values(routeConfig).map(({
            element,
            path,
        }) => (
            <Route
                path={path}
                key={path}
                element={(
                    <Suspense fallback="loading...">
                        {element}
                    </Suspense>
                )}
            />
        ))}
    </Routes>
);
