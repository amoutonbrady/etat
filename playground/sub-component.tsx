import { useTestStore } from "./stores";

export default () => {
  const [test, setTest] = useTestStore();

  return <button onClick={() => {
    const random = Math.random() * 100;
    setTest('a', random);
  }}>
      {test.a}</button>;
};
