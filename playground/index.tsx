/* @refresh reload */
import { render } from 'solid-js/web';
import { EtatProvider } from '../src';

import App from './app';

const root = document.getElementById('root') as HTMLElement;

render(
  () => (
    <EtatProvider>
      <App />
    </EtatProvider>
  ), 
  root,
);
