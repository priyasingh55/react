import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import Subcomponent from './components/SubComponent';
import ExpenseItem from './expenseTracker/ExpenseItem';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Subcomponent />
 


  </StrictMode>
);
