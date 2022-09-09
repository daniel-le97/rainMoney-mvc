import { sourcesServices } from "../Services/SourcesServices.js";
import { getFormData } from "../Utils/FormHandler.js";

export class SourcesController {
  constructor() {
    console.log("hello from sources controller");
  }
  createSource(budgetId) {
    try {
      window.event.preventDefault();
      console.log("hello from create source");
      const form = window.event.target;
      let newSource = getFormData(form);
      newSource.budgetId = budgetId;

      sourcesServices.createSource(newSource);
      // @ts-ignore
      form.reset();
    } catch (error) {
      console.error("error", error);
    }
  }
}
