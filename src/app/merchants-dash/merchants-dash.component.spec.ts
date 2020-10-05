import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantsDashComponent } from './merchants-dash.component';

describe('MerchantsDashComponent', () => {
  let component: MerchantsDashComponent;
  let fixture: ComponentFixture<MerchantsDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantsDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantsDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
