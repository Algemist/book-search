import { classNames } from 'shared/lib/classNames/classNames';
import { AppRoute } from 'app/providers/RouteProvider';

const App = () => (
    <div className={classNames('app', {}, [])}>
        <AppRoute />
    </div>
);

export default App;
