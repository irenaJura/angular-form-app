import { LocationStrategy } from '@angular/common';
import { MockLocationStrategy } from '@angular/common/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { FormPageComponent } from './form-page.component';

describe('FormPageComponent', () => {
  let component: FormPageComponent;
  let fixture: ComponentFixture<FormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPageComponent ],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      providers: [{ provide: LocationStrategy, useClass: MockLocationStrategy }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with the same number of form elements as items in formData', () => {
    const formElement = fixture.debugElement.nativeElement.querySelector('form');
    const inputElements = formElement.querySelectorAll('input');
    const formDataElements = component.formData.length;

    expect(inputElements.length).toEqual(formDataElements);
  });

  it('should show validation message when user touched a required field', () => {
    const firstNameElement = fixture.debugElement.nativeElement.querySelector('form').querySelectorAll('input')[0];
    const firstNameFormGroup = component.userForm.get('firstName');

    expect(firstNameElement.value).toEqual(firstNameFormGroup?.value);
    expect(firstNameFormGroup?.errors).not.toBeNull();
    expect(firstNameFormGroup?.errors?.required).toBeTrue();
  });

  it('should be valid if form value is valid', () => {
    component.userForm.setValue({
      "firstName": "Irena",
      "lastName": "Jurasek",
      "email": "irenaskydive@gmail.com",
      "hobby1": "hiking",
      "hobby2": "biking",
      "hobby3": "reading",
      "hobbies": []
    });

    expect(component.userForm.valid).toEqual(true);
  });


});
