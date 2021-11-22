import { fork, serialize, Scope } from "effector";
import { useMemo } from "react";

let scope: Scope;

function initializeScope(initialData: unknown) {
  const _scope =
    scope ??
    fork({
      values: {
        ...(scope ? serialize(scope) : {}),
        ...(typeof initialData === "object" ? initialData : {}),
      },
    });

  // For SSG and SSR always create a new scope
  if (typeof window === "undefined") return _scope;
  // Create the scope once in the client
  if (!scope) scope = _scope;

  return _scope;
}

export function useScope(initialState: unknown) {
  return useMemo(() => initializeScope(initialState), [initialState]);
}
