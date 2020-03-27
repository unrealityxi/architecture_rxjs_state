import { NgModule } from '@angular/core';

import { SummaryRoutingModule } from './summary-routing.module';
import { SummaryComponent } from './components/summary/summary.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { ViewStateComponent } from './components/view-state/view-state.component';


@NgModule({
  declarations: [SummaryComponent, ViewStateComponent],
  imports: [
    SharedModule,
    SummaryRoutingModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class SummaryModule { }
