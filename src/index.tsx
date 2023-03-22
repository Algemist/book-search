import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import App from './app/App';
import './app/styles/index.scss';

const root = createRoot(document.getElementById('root')!);

root.render(
    <StrictMode>
        <StoreProvider>
            <BrowserRouter>
                <ErrorBoundary>
                    <App />
                </ErrorBoundary>
            </BrowserRouter>
        </StoreProvider>
    </StrictMode>,
);
