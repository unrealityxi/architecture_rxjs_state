import { ISearchApiState } from 'src/app/features/searchApi/state/searchApiState.interface';
import { ITest } from 'src/app/state/test.interface';

export interface IState extends ISearchApiState, ITest {}
