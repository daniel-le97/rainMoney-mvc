import { generateId } from "../Utils/generateId.js";

export class Source {
  constructor(data) {
    (this.name = data.name),
      (this.price = data.price),
      (this.budgetId = data.budgetId);
    this.id = data.id || generateId();
  }


  get Template() {
    return `
            <div class="col-6">
                    <span>${this.name}</span>
                  </div>
                  <div class="col-2">
                    <span>
                      $<span>${this.price}</span>
                    </span>
                  </div>
                  <div class="col-2">
                    <i class="mdi mdi-trash-can" onclick="app.sourcesController.removeSource('${this.id}')"></i>
                  </div>      
      `;
  }
}
