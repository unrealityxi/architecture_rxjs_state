import { Injectable } from "@angular/core";
import { IState } from "./state.interface";
import { State } from "./state.model";
import { BehaviorSubject } from "rxjs";
import { merge, cloneDeep } from 'lodash';


@Injectable()
export class GlobalStateService {
  // tslint:disable-next-line: variable-name
  private _state: IState = new State();
  get state(): IState {
    return cloneDeep(this._state);
  }
  public $state = new BehaviorSubject(this.state);

  constructor() {}
  updateState(stateUpdate: IState) {
    this._state.stateVersion += 1;
    stateUpdate = cloneDeep(stateUpdate);
    const currentState = this.state;
    const newState = merge(currentState, stateUpdate);
    this._state = cloneDeep(newState);
    this.$state.next(this.state);
  }
}
