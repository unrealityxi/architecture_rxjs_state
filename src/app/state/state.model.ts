import { searchEngines } from 'src/app/features/searchApi/enums/search-engines.enum';
import { IState } from 'src/app/state/state.interface';

export class State implements IState {
  stateVersion = 0;
  searchEngine: searchEngines = searchEngines.bing;
  searchCriteria: string;
  summaryTimesVisited = 0;
}
