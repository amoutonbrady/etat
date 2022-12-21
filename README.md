# Etat

> Etat means "state" in french

Experimental global store for Solid focused on size and extensibility.
This is essentially a global and safe way to have Solid's stores via Context API.
If you want a more thorough solution, check out [solid-pebble](https://github.com/lxsmnsyc/solid-pebble).

## Installation

```bash
$ npm install @amoutonbrady/etat
$ pnpm install @amoutonbrady/etat
$ yarn install @amoutonbrady/etat
```

## Getting started

1. Add the global `etatProvider`
   ```tsx
   // index.tsx

   import { render } from 'solid-js/web'
   import { EtatProvider } from '@amoutonbrady/etat';

   import { App } from './app';

   render(
     () => (
       <EtatProvider>
         <App />
       </EtatProvider>
     ), 
     document.getElementById('root'),
   );
   ```

2. Define your stores globally
   ```tsx
   // store.tsx

   import { createEtat } from '@amoutonbrady/etat`;

   const useAuth = createEtat('auth', {
     token: '',
     get isAuthenticated() {
       return this.token.length > 0;
     },
   });
   ```

3. Use them as you please accross the whole app
   ```tsx
   // app.tsx

   import { Show } from 'solid-js';
   import { Login } from './login.tsx';
   import { useAuth } from './store.tsx';

   export function App() {
     const [auth] = useAuth();

     return <Show when={!auth.isAuthenticated} fallback={<p>Your are logged in with the token {auth.token}<p>}>
       <Login />
     </Show>;
   }

   // login.tsx

   import { useAuth } from './store.tsx';

   export function Login() {
     const [_, setAuth] = useAuth();

     function login() {
       return setAuth('token', 'abcde');
     }

     return <button type="button" onClick={login}>Login!</button>
   }
   ```

## API

- `createEtat<T>(id: string, initialValue: T): () => [Store<T>, StoreSetterFunction<T>]`
  - `id` : This is a unique name that's being used to store the store value.
  - `initialValue` : This is the initial value of the store. It should ba an object. This will become a parameter of a `createStore` function.
- `EtatProvider` : this is the global provider. Without this, the stores won't work. I didn't add any check for this.
