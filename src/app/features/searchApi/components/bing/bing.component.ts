import { Component, OnInit, OnDestroy } from '@angular/core';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { GlobalStateService } from 'src/app/state/global-state.service';
import { IState } from 'src/app/state/state.interface';

@Component({
  selector: 'app-bing',
  templateUrl: './bing.component.html',
  styleUrls: ['./bing.component.scss']
})
export class BingComponent implements OnInit, OnDestroy {

  searchCriteria = "";

  constructor(private stateService: GlobalStateService) { }

  ngOnInit() {
    this.startSyncWithGlobalState();
  }

  ngOnDestroy() {}

  startSyncWithGlobalState() {
    this.stateService.$state.pipe(untilDestroyed(this)).subscribe((state: IState) => {
      this.searchCriteria = state.searchCriteria;
    });
  }
}
