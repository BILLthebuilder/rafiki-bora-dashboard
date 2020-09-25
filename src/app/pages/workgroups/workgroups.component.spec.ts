import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkgroupsComponent } from './workgroups.component';

describe('WorkgroupsComponent', () => {
  let component: WorkgroupsComponent;
  let fixture: ComponentFixture<WorkgroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkgroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkgroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
