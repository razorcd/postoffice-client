import { Component, SecurityContext, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  templateUrl: 'filters.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [],
  providers: []
})
export class FiltersComponent {

  constructor(sanitizer: DomSanitizer) {
  }
}
