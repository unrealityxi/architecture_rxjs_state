import { Component, OnInit } from '@angular/core';
import { searchEngines } from 'src/app/features/searchApi/enums/search-engines.enum';
import { GlobalStateService } from 'src/app/state/global-state.service';
import { isFakeMousedownFromScreenReader } from '@angular/cdk/a11y';
import { ISummaryState } from 'src/app/features/summary/state/summaryState.interface';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(public stateService: GlobalStateService) { }

  ngOnInit() {
    let timesVisited = this.stateService.state.summaryTimesVisited;
    timesVisited += 1;
    this.stateService.updateState({summaryTimesVisited: timesVisited});
  }

  changeEngine() {
    const engine = this.stateService.state.searchEngine;
    const searchEngine = engine === searchEngines.bing ? searchEngines.google : searchEngines.bing;
    this.stateService.updateState({searchEngine});
  }

}
