import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { BingComponent } from './components/bing/bing.component';
import { GoogleComponent } from './components/google/google.component';


const routes: Routes = [  {
  path: 'search',
  component: SearchComponent,
  children: [
      {
        path: 'bing',
        component: BingComponent,
        outlet: 'searchEngineOutlet'
      },
      {
        path: 'google',
        component: GoogleComponent,
        outlet: 'searchEngineOutlet'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchApiRoutingModule { }
