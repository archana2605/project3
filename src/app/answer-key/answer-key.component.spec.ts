import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerKeyComponent } from './answer-key.component';

describe('AnswerKeyComponent', () => {
  let component: AnswerKeyComponent;
  let fixture: ComponentFixture<AnswerKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
