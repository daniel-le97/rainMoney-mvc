import { appState } from "../AppState.js";
import { Source } from "../Models/Source.js";

class SourcesServices {
  createSource(formData) {
    let source = new Source(formData);
    appState.sources = [source, ...appState.sources];
    console.log(appState.sources);
  }
}
export const sourcesServices = new SourcesServices();
