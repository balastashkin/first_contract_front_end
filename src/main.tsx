import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TonConnectUIProvider } from "@tonconnect/ui-react"; 

const manifestUrl =
  "https://balastashkin.github.io/first_contract_front_end/tonconnect-manifest.json";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <App />
  </TonConnectUIProvider>,
);
