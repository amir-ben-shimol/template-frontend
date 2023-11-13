import React from 'react';
import ReactDOM from 'react-dom/client';
import { ModalProvider } from '@/ui/UIModal/ModalProvider';
import App from './App';

import './styles/custom.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ModalProvider>
			<App />
		</ModalProvider>
	</React.StrictMode>,
);
