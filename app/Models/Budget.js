import { generateId } from "../Utils/generateId.js";

export class Budget {
  constructor(data) {
    (this.name = data.name),
      (this.price = data.price),
      (this.purchased = data.purchased);
    this.id = data.id || generateId;
  }

  get SourcesTemplates(){
    let template= ''
    this.
  }
  get Template() {
    return /*html*/ `
      <div class="container">
              <div class="row">
              <div class="col-12">
                <div class="row">
                  <div class="col-12 d-flex justify-content-between h4">
                    <div>
                    <input type='checkbox' class='m-2 h-75'>
                    </div>
                    <i class="mdi mdi-television"></i>
                    <span>${this.name}</span>
                    <div>
                      <span>$360</span>
                      <span>of</span>
                      <span>$${this.price}</span>
                    </div>
                  </div>
                  <div>
                  </div>
                </div>
                <div class="row fs-4 justify-content-between" id='sources'>
                 ${this.SourcesTemplates}
                </div>
              </div>
            </div>
            <div class="row justify-content-between">
            <form class='d-flex' onsubmit='app.sourcesController.createSource()'>
              <div class=col-5>
                  <input class="form-control square-right" type="text" required minlength="2" name="name" placeholder="source"/>
              <label for="name" class="visually-hidden">Name</label>
            </div>
            <div class="col-3">
              <input class="form-control  square" type="number" required min="0" name="price" placeholder="0.00"/>
              <label for="price" class="visually-hidden">Price</label>
              </div>
              <div class="col-2">
                <button class="btn btn-primary" type='submit'>button</button>
              </div>
              </form>
            </div>
            </div>
    
    `;
  }
}
