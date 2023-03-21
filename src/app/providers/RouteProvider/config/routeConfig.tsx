import { MainPage } from 'pages/MainPage';
import { RouteProps } from 'react-router-dom';
import { DetailsPage } from 'pages/DetailsPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
    MAIN = 'main',
    DETAILS_PAGE = 'details_page',
    NOT_FOUND_PAGE = 'not_found_page'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.DETAILS_PAGE]: '/details/', // + id
    [AppRoutes.NOT_FOUND_PAGE]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.DETAILS_PAGE]: {
        path: `${RoutePath.details_page}:id`,
        element: <DetailsPage />,
    },
    [AppRoutes.NOT_FOUND_PAGE]: {
        path: RoutePath.not_found_page,
        element: <NotFoundPage />,
    },
};
