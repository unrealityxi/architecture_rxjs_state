import { Component, OnInit } from "@angular/core";
import { GlobalStateService } from "src/app/state/global-state.service";

@Component({
  selector: "app-view-state",
  templateUrl: "./view-state.component.html",
  styleUrls: ["./view-state.component.scss"]
})
export class ViewStateComponent implements OnInit {
  constructor(public stateService: GlobalStateService) {}

  ngOnInit() {}
}
