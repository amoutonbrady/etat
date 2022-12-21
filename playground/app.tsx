import type { Component } from 'solid-js';

import { useTestStore } from './stores';
import SubComponent from './sub-component';

const App: Component = () => {
  const [test, setTest] = useTestStore();

  return (
    <>
      <button onClick={() => setTest('a', 0)}>reset</button>
      <h1>{test.a}</h1>
      <h1>{test.double}</h1>
      <SubComponent />
    </>
  );
};

export default App;
