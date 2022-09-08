import { sourcesServices } from "../Services/SourcesServices.js";
import { getFormData } from "../Utils/FormHandler.js";



export class SourcesController {
  constructor() {
    console.log("hello from sources controller");
  }
  createSource(){
    try {
      window.event.preventDefault();
      console.log("hello from create budget");
      const form = window.event.target;
      let formData = getFormData(form);
      sourcesServices.createSource(formData);
      // @ts-ignore
      form.reset();
    } catch (error) {
      console.error("error", error);
    }
  }
  }

