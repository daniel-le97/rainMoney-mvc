import { appState } from "../AppState.js";
import { Budget } from "../Models/Budget.js";

class BudgetsServices {
  createBudget(formData) {
    let budget = new Budget(formData);
    appState.budgets = [budget, ...appState.budgets];
    console.log(appState.budgets);
    // console.log("hello from create services");
  }
}
export const budgetsService = new BudgetsServices();
