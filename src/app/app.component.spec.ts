import {async, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from "@angular/core";

import {AppComponent} from './app.component';


describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [],
      schemas: [NO_ERRORS_SCHEMA] // ignore subcomponents
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
