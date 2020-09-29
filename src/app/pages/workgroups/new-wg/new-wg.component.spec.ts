import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WgDetailsComponent } from './new-wg.component';

describe('WgDetailsComponent', () => {
  let component: WgDetailsComponent;
  let fixture: ComponentFixture<WgDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WgDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WgDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
