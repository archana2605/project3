import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartYourExamComponent } from './start-your-exam.component';

describe('StartYourExamComponent', () => {
  let component: StartYourExamComponent;
  let fixture: ComponentFixture<StartYourExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartYourExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartYourExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
