import { appState } from "../AppState.js";
import { budgetsService } from "../Services/BudgetsServices.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";
function _drawBudgets() {
  let template = "";
  appState.budgets.forEach((budget) => (template += budget.Template));

  setHTML("budgets", template);
}
export class BudgetsController {
  constructor() {
    _drawBudgets();
    appState.on("budgets", _drawBudgets);
    appState.on("sources", _drawBudgets);
    console.log("hello from controller");
  }
  createBudget() {
    try {
      window.event.preventDefault();
      console.log("hello from create budget");
      const form = window.event.target;
      let formData = getFormData(form);
      budgetsService.createBudget(formData);
      // @ts-ignore
      form.reset();
    } catch (error) {
      console.error("error", error);
    }
  }
}
