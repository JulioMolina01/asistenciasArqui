import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRfidComponent } from './create-rfid.component';

describe('CreateRfidComponent', () => {
  let component: CreateRfidComponent;
  let fixture: ComponentFixture<CreateRfidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRfidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRfidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
