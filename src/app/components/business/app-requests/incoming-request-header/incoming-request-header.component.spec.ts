import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from "@angular/platform-browser";

import { IncomingRequestHeaderComponent } from './incoming-request-header.component';
import {TimeAgoPipe} from "../../../../pipes/timeAgo.pipe";
import {DebugElement} from "@angular/core/src/debug/debug_node";

describe('IncomingRequestHeaderComponent', () => {
  let component: IncomingRequestHeaderComponent;
  let fixture: ComponentFixture<IncomingRequestHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomingRequestHeaderComponent, TimeAgoPipe ]
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

  it('should show inputs', () => {
    component.requestMethod = "POST";
    component.requestUrl = "http://someUrl";
    component.requestTimestamp = Date.now();

    fixture.detectChanges();

    let elementMethod:DebugElement = fixture.debugElement.queryAll(By.css('.incoming-request-header-method'))[0];
    let elementUrl:DebugElement = fixture.debugElement.queryAll(By.css('.incoming-request-header-url'))[0];
    let elementTimestamp:DebugElement = fixture.debugElement.queryAll(By.css('.incoming-request-header-timestamp'))[0];

    expect(elementMethod.nativeElement.innerHTML).toBe("POST");
    expect(elementUrl.nativeElement.innerHTML).toBe("http://someUrl");
    expect(elementTimestamp.nativeElement.innerHTML).toBe("a few seconds ago");
  });
});
