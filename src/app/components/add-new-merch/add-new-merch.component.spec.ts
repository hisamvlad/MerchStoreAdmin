import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewMerchComponent } from './add-new-merch.component';

describe('AddNewMerchComponent', () => {
  let component: AddNewMerchComponent;
  let fixture: ComponentFixture<AddNewMerchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewMerchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewMerchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
