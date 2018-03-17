import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";

describe('AppComponent', () => {

  class MockedRouter {
    public events():Observable<Event> {
      return new Observable();
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{provide: Router, useClass: MockedRouter}],
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // ignore subcomponents with dashes
    });
    TestBed.compileComponents();
  });


  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
