import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MiniKitProvider } from '@worldcoin/minikit-js/minikit-provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MiniKitProvider
      config={{
        appId: process.env.REACT_APP_WORLD_ID_APP_ID, // Make sure this is in your .env
        action: 'banka_wallet_login', // Replace with your action name
        // signal: 'user_signal', // Optional: If you want to include a signal
        // walletBridgeUrl: 'https://bridge.worldcoin.org', // Optional: Defaults to this
      }}
    >
      <App />
    </MiniKitProvider>
  </React.StrictMode>
);
