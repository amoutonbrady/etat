import { createContext, ParentProps, useContext } from "solid-js";
import { Store, createStore, SetStoreFunction } from 'solid-js/store';

type CommonObject = Record<string, unknown>;

const StoreContext = createContext<Map<string, unknown>>();

export function createEtat<T extends CommonObject>(id: string, initialValue: T) {
  function useStore() {
    const globalContext = useContext(StoreContext);

    if (!globalContext.has(id)) {
      globalContext.set(id, createStore(initialValue));
    }

    return globalContext.get(id);
  }

  return useStore as () => [Store<T>, SetStoreFunction<T>];
}

export function EtatProvider(props: ParentProps) {
  return (
    <StoreContext.Provider value={new Map()}>
      {props.children}
    </StoreContext.Provider>
  );
}
