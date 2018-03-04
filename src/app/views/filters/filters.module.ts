import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FiltersRoutingModule } from './filters-routing.module';
import { FiltersComponent } from './filters.component';

@NgModule({
  imports: [
    CommonModule,
    FiltersRoutingModule,
  ],
  declarations: [
    FiltersComponent,
  ]
})
export class FiltersModule { }
