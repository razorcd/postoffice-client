import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiltersComponent } from './filters.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Filters'
    },
    children: [
      {
        path: 'filters',
        component: FiltersComponent,
        data: {
          title: 'Filters'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiltersRoutingModule {}
