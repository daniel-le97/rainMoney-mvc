import { appState } from "../AppState.js";
import { Budget } from "../Models/Budget.js";
import { saveState } from "../Utils/Store.js";

class BudgetsServices {
  createBudget(formData) {
    let budget = new Budget(formData);
    appState.budgets = [budget, ...appState.budgets];
    console.log(appState.budgets);
    console.log("hello from create services");
    saveState("budgets", appState.budgets);
  }
}
export const budgetsService = new BudgetsServices();
