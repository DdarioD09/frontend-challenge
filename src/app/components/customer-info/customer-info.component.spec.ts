import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInfoComponent } from './customer-info.component';

describe('ClientInfoComponent', () => {
  let component: CustomerInfoComponent;
  let fixture: ComponentFixture<CustomerInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerInfoComponent]
    });
    fixture = TestBed.createComponent(CustomerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
