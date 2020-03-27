import { ISearchApiState } from 'src/app/features/searchApi/state/searchApiState.interface';
import { ISummaryState } from 'src/app/features/summary/state/summaryState.interface';

export interface IState extends ISearchApiState, ISummaryState {
  stateVersion?: number;
}
