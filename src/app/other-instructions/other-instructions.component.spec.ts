import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherInstructionsComponent } from './other-instructions.component';

describe('OtherInstructionsComponent', () => {
  let component: OtherInstructionsComponent;
  let fixture: ComponentFixture<OtherInstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherInstructionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
