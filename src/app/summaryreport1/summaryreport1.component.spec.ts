import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Summaryreport1Component } from './summaryreport1.component';

describe('Summaryreport1Component', () => {
  let component: Summaryreport1Component;
  let fixture: ComponentFixture<Summaryreport1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Summaryreport1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Summaryreport1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
