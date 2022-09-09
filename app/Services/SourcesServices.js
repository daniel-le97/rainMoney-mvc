import { appState } from "../AppState.js";
import { Source } from "../Models/Source.js";
import { saveState } from "../Utils/Store.js";

class SourcesServices {
  removeSource(id) {
    let source = appState.sources.filter((source) => source.id !== id);
    appState.sources = source;
    saveState("sources", appState.sources);
  }
  createSource(newSource) {
    let source = new Source(newSource);
    console.log("new source", source);
    appState.sources = [source, ...appState.sources]
    console.log(appState.sources);
    saveState("sources", appState.sources);
    
  }

  createTotal(id){
    let total = 0
    let sourceTotal = appState.sources.filter(s => s.id !==id)
  }
  
}
export const sourcesServices = new SourcesServices();
