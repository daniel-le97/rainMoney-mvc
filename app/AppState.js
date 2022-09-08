import { Budget } from "./Models/Budget.js";
import { Source } from "./Models/Source.js";
import { Value } from "./Models/Value.js";
import { EventEmitter } from "./Utils/EventEmitter.js";
import { isValidProp } from "./Utils/isValidProp.js";
import { loadState } from "./Utils/Store.js";

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState("values", Value);

  budgets = [
    new Budget({
      name: "New Tv",
      price: 500,
      purchased: false,
    }),
  ];

  sources = [
    new Source({
      name: "Birthday Money",
      price: 60,
      budgetId: "abc123",
    }),
  ];
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop);
    return target[prop];
  },
  set(target, prop, value) {
    isValidProp(target, prop);
    target[prop] = value;
    target.emit(prop, value);
    return true;
  },
});
