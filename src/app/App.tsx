import { classNames } from 'shared/lib/classNames/classNames';

const App = () => (
    <div className={classNames('app', {}, [])}>
        hello world
    </div>
);

export default App;
