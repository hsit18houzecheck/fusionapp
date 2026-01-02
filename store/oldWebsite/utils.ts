import { assocPath, mergeLeft } from "ramda";
import { create } from "zustand";
import type { StoreApi, UseBoundStore } from "zustand";
import { persist, subscribeWithSelector } from "zustand/middleware";

type AnyState = Record<string, any>;
type SetFn<S extends AnyState> = (
  state: Partial<S> | ((state: S) => S),
  replace?: boolean
) => void;
type GetFn<S extends AnyState> = () => S;

export type CommonActions<S extends AnyState> = {
  set: (key?: string | Array<string | number>, val?: unknown) => void;
  reset: (key?: string | Array<string | number>) => void;
};

export const commonActions = <S extends AnyState>({
  initialState,
  set,
}: {
  initialState: S;
  set: SetFn<S>;
}) => ({
  set: (key?: string | Array<string | number>, val?: unknown) =>
    set(
      key
        ? assocPath(Array.isArray(key) ? key : [key], val as any)
        : mergeLeft(val as any)
    ),
  reset: (key?: string | Array<string | number>) =>
    set(
      key
        ? assocPath(
            Array.isArray(key) ? key : [key],
            (initialState as any)[key as any]
          )
        : (initialState as any)
    ),
});

export const createStore = <
  S extends AnyState,
  A extends Record<string, any> = Record<string, never>,
>({
  storeName,
  initialState,
  actions = () => ({}) as A,
}: {
  storeName: string;
  initialState: S;
  actions?: (args: {
    set: SetFn<S & A & CommonActions<S>>;
    get: GetFn<S & A & CommonActions<S>>;
  }) => A;
}): UseBoundStore<StoreApi<S & A & CommonActions<S>>> =>
  create<S & A & CommonActions<S>>()(
    subscribeWithSelector(
      persist(
        (set, get, _api) =>
          ({
            ...(initialState as S),
            ...(commonActions<S>({
              initialState,
              set: set as SetFn<S>,
            }) as CommonActions<S>),
            ...(actions({
              set: set as SetFn<S & A & CommonActions<S>>,
              get: get as GetFn<S & A & CommonActions<S>>,
            }) as A),
          }) as S & A & CommonActions<S>,
        { name: storeName }
      )
    )
  );
