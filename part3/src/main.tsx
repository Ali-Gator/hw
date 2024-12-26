import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { StrictMode } from 'react';

// this manifest is used temporarily for development purposes
const manifestUrl = 'https://Ali-Gator.github.io/hw/tonconnect-manifest.json';

createRoot(document.getElementById('root') as HTMLElement).render(
    <TonConnectUIProvider manifestUrl={manifestUrl}>
        <StrictMode>
            <App />
        </StrictMode>
    </TonConnectUIProvider>,
);


