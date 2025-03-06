
import { createRoot } from 'react-dom/client'
import PiwikPro from '@piwikpro/react-piwik-pro';
import App from './App.tsx'
import './index.css'

// Initialize Piwik Pro before rendering the app
PiwikPro.initialize('f6bd4ab6-2253-4790-8081-222a0bfc4760', 'https://schulwunder-woltersdorf.piwik.pro');

createRoot(document.getElementById("root")!).render(<App />);
