import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {
  AsideToggleDirective, ReplaceDirective,
  NAV_DROPDOWN_DIRECTIVES, SIDEBAR_TOGGLE_DIRECTIVES
} from './directives';
import {TimeAgoPipe} from "./pipes/timeAgo.pipe";
import {TimeISOPipe} from "./pipes/timeISO.pipe";

const APP_DIRECTIVES = [
  AsideToggleDirective,
  ReplaceDirective,
  NAV_DROPDOWN_DIRECTIVES,
  SIDEBAR_TOGGLE_DIRECTIVES
];

const APP_PIPES = [
  TimeAgoPipe,
  TimeISOPipe
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    APP_DIRECTIVES,
    APP_PIPES
  ],
  exports: [
    CommonModule,
    FormsModule,
    APP_DIRECTIVES,
    APP_PIPES
  ],
  providers: [
  ]
})
export class SharedModule { }
