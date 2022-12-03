import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordApiComponent } from './password-api.component';

describe('PasswordApiComponent', () => {
  let component: PasswordApiComponent;
  let fixture: ComponentFixture<PasswordApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
