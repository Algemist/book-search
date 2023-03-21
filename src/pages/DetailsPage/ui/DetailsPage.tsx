import { memo, useEffect } from 'react';
import { BookProfile } from 'entities/Book/ui/BookProfile/BookProfile';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'app/providers/RouteProvider/config/routeConfig';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchBookDetails, getBooksIsLoading } from 'entities/Book';
import { useSelector } from 'react-redux';
import { Loader } from 'shared/ui/Loader/Loader';

export const DetailsPage = memo(() => {
    const { id } = useParams<{id: string}>();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getBooksIsLoading);

    useEffect(() => {
        if (id) {
            dispatch(fetchBookDetails(id));
        }
    }, [dispatch, id]);

    return (
        <div>
            <AppLink
                to={RoutePath.main}
            >
                home
            </AppLink>
            {isLoading ? (
                <div>
                    <Loader />
                </div>
            ) : (
                <BookProfile />
            )}
        </div>
    );
});
