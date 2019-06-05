import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreAllExamsComponent } from './explore-all-exams.component';

describe('ExploreAllExamsComponent', () => {
  let component: ExploreAllExamsComponent;
  let fixture: ComponentFixture<ExploreAllExamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreAllExamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreAllExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
