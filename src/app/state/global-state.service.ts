import { Injectable } from "@angular/core";
import { IState } from "./state.interface";
import { State } from "./state.model";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class GlobalStateService {
  // tslint:disable-next-line: variable-name
  private _state: IState = new State();
  get state(): IState {
    return JSON.parse(JSON.stringify(this._state));
  }
  public $state = new BehaviorSubject(this.state);

  constructor() {}
  updateState(stateUpdate: IState) {
    this._state.stateVersion += 1;
    stateUpdate = JSON.parse(JSON.stringify(stateUpdate));
    const currentState = this.state;
    const newState = Object.assign(currentState, stateUpdate);
    this._state = JSON.parse(JSON.stringify(newState));
    this.$state.next(this.state);
  }
}
