import { MainPage } from 'pages/MainPage';
import { RouteProps } from 'react-router-dom';
import { DetailsPage } from 'pages/DetailsPage';

export enum AppRoutes {
    MAIN = 'main',
    DETAILS_PAGE = 'details_page'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.DETAILS_PAGE]: '/details',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.DETAILS_PAGE]: {
        path: RoutePath.details_page,
        element: <DetailsPage />,
    },
};
