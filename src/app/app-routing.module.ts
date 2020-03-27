import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'searchApi',
    loadChildren: () => import('./features/searchApi/searchApi.module').then(m => m.SearchApiModule)
  },
  {
    path: 'summary',
    loadChildren: () => import('./features/summary/summary.module').then(m => m.SummaryModule)
  },
  {
    path: '',
    redirectTo: '/searchApi/search',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/searchApi/search',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
