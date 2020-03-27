import { searchEngines } from "src/app/features/searchApi/enums/search-engines.enum";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { untilDestroyed } from "ngx-take-until-destroy";
import { GlobalStateService } from 'src/app/state/global-state.service';
import { IState } from 'src/app/state/state.interface';

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit, OnDestroy {
  public searchForm: FormGroup;
  private searchCriteriaControl = new FormControl(this.stateService.state.searchCriteria);
  public searchEngines = Object.keys(searchEngines);
  private searchEngineControl = new FormControl(
    this.stateService.state.searchEngine || searchEngines.bing
  );

  constructor(private router: Router, private stateService: GlobalStateService) {}

  ngOnInit() {
    this.initializeSearchForm();
    this.startSyncWithGlobalState();
    this.updateStateOnFormChange();
  }

  startSyncWithGlobalState() {
    this.stateService.$state
      .pipe(untilDestroyed(this))
      .subscribe((state: IState) => {
        const { searchCriteria, searchEngine } = state;
        if (searchCriteria && searchCriteria.trim()) {
          this.router.navigate([
            "searchApi",
            "search",
            { outlets: { searchEngineOutlet: [searchEngine] } }
          ]);
        } else {
          this.router.navigate([
            "searchApi",
            "search"
          ]);
        }
      });
  }
  initializeSearchForm() {
    this.searchForm = new FormGroup({
      searchCriteria: this.searchCriteriaControl,
      searchEngine: this.searchEngineControl
    });
  }

  updateStateOnFormChange() {
    this.searchForm.valueChanges.pipe(untilDestroyed(this)).subscribe(values => {
      this.stateService.updateState(values);
    });
  }

  ngOnDestroy() {
  }
}
