import { Component, OnInit, OnDestroy } from "@angular/core";
import { untilDestroyed } from "ngx-take-until-destroy";
import { GlobalStateService } from 'src/app/state/global-state.service';
import { IState } from 'src/app/state/state.interface';

@Component({
  selector: "app-google",
  templateUrl: "./google.component.html",
  styleUrls: ["./google.component.scss"]
})
export class GoogleComponent implements OnInit, OnDestroy {
  searchCriteria = "";

  constructor(private stateService: GlobalStateService) {}

  ngOnInit() {
    this.startSyncWithGlobalState();
  }
  ngOnDestroy() {}

  startSyncWithGlobalState() {
    this.stateService.$state
      .pipe(untilDestroyed(this))
      .subscribe((state: IState) => {
        this.searchCriteria = state.searchCriteria;
      });
  }
}
