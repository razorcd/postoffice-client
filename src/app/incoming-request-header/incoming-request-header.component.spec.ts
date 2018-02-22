import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingRequestHeaderComponent } from './incoming-request-header.component';

describe('IncomingRequestHeaderComponent', () => {
  let component: IncomingRequestHeaderComponent;
  let fixture: ComponentFixture<IncomingRequestHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomingRequestHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomingRequestHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
