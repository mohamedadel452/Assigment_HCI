import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskComponantComponent } from './task-componant.component';

describe('TaskComponantComponent', () => {
  let component: TaskComponantComponent;
  let fixture: ComponentFixture<TaskComponantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskComponantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskComponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
