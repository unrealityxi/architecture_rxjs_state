import { Component, OnInit } from '@angular/core';
import { searchEngines } from 'src/app/features/searchApi/enums/search-engines.enum';
import { GlobalStateService } from 'src/app/state/global-state.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(public stateService: GlobalStateService) { }

  ngOnInit() {
  }

  changeEngine() {
    const engine = this.stateService.state.searchEngine;
    const searchEngine = engine === searchEngines.bing ? searchEngines.google : searchEngines.bing;
    this.stateService.updateState({searchEngine});
  }

}
