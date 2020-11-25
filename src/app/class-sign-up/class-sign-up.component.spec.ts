import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSignUpComponent } from './class-sign-up.component';

describe('ClassSignUpComponent', () => {
  let component: ClassSignUpComponent;
  let fixture: ComponentFixture<ClassSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassSignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
