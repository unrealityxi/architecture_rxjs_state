import { searchEngines } from '../enums/search-engines.enum';
export interface ISearchApiState {
  searchEngine?: searchEngines;
  searchCriteria?: string;
}
