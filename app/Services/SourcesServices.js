import { appState } from "../AppState.js";
import { Source } from "../Models/Source.js";
import { saveState } from "../Utils/Store.js";

class SourcesServices {
  createSource(newSource) {
    debugger;
    let source = new Source(newSource);
    console.log("new source", source);
    appState.sources = [source, ...appState.sources];
    console.log(appState.sources);
    saveState("sources", appState.sources);
  }
}
export const sourcesServices = new SourcesServices();
