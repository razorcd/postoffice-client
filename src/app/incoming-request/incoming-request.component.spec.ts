import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

import { IncomingRequestComponent } from './incoming-request.component';
import {TimeISOPipe} from "../pipes/timeISO.pipe";
import {IncomingRequest} from "../models/incomingRequest";
import {getIncomingRequestFixture} from "../testHelpers/fixtures/IncomingRequestFixture";

describe('IncomingRequestComponent', () => {
  let component: IncomingRequestComponent;
  let fixture: ComponentFixture<IncomingRequestComponent>;
  let incomingRequest:IncomingRequest;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomingRequestComponent, TimeISOPipe ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // ignore subcomponents with dashes
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomingRequestComponent);
    component = fixture.componentInstance;

    incomingRequest = getIncomingRequestFixture();

    component.incomingRequest = incomingRequest;
  });


  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should show details when specified to', () => {
    component.detailsVisibility = true;

    fixture.detectChanges();
    let element:DebugElement = fixture.debugElement.queryAll(By.css('.incoming-request-details'))[0];

    expect(component.detailsVisibility).toBeTruthy();
    expect(element).toBeDefined();
  });

  it('should NOT show details when specified NOT to', () => {
    component.detailsVisibility = false;

    fixture.detectChanges();
    let element:DebugElement[] = fixture.debugElement.queryAll(By.css('.incoming-request-details'));

    expect(component.detailsVisibility).toBeFalsy();
    expect(element.length).toBe(0);
  });

  it('#toggleDetailsVisibility should toggle details visibility', () => {
    fixture.detectChanges();
    let elements:DebugElement[] = fixture.debugElement.queryAll(By.css('.incoming-request-details'));
    expect(elements.length).toBe(0);
    expect(component.detailsVisibility).toBeFalsy();

    component.toggleDetailsVisibility(incomingRequest.id); //enable details visibility
    fixture.detectChanges();

    let element:DebugElement = fixture.debugElement.queryAll(By.css('.incoming-request-details'))[0];
    expect(element).toBeDefined();
    expect(component.detailsVisibility).toBeTruthy();

    component.toggleDetailsVisibility(incomingRequest.id); //disable details visibility
    fixture.detectChanges();

    elements = fixture.debugElement.queryAll(By.css('.incoming-request-details'));
    expect(elements.length).toBe(0);
    expect(component.detailsVisibility).toBeFalsy();
  })

});
