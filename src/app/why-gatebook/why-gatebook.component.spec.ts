import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyGatebookComponent } from './why-gatebook.component';

describe('WhyGatebookComponent', () => {
  let component: WhyGatebookComponent;
  let fixture: ComponentFixture<WhyGatebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyGatebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyGatebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
