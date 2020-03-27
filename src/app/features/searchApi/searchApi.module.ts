import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchComponent } from './components/search/search.component';
import { SearchApiRoutingModule } from './searchApi-routing.module';
import { BingComponent } from './components/bing/bing.component';
import { GoogleComponent } from './components/google/google.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule, MatInputModule } from '@angular/material';



@NgModule({
  declarations: [SearchComponent, BingComponent, GoogleComponent],
  imports: [
    SharedModule, SearchApiRoutingModule, ReactiveFormsModule, MatRadioModule, MatInputModule
  ]
})
export class SearchApiModule { }
