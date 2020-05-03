import { writable } from "svelte/store";

function createCovid19() {
  const { subscribe, set, update } = writable();

  return {
    subscribe,
  };
}
