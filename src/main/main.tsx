import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeContainer } from '@/shared/styles';
import { Routers } from '@/main/routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContainer>
      <Routers />
    </ThemeContainer>
  </React.StrictMode>,
);
