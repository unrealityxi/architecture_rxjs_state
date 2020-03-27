import { NgModule } from '@angular/core';

import { SummaryRoutingModule } from './summary-routing.module';
import { SummaryComponent } from './components/summary/summary.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [SummaryComponent],
  imports: [
    SharedModule,
    SummaryRoutingModule,
    MatButtonModule
  ]
})
export class SummaryModule { }
