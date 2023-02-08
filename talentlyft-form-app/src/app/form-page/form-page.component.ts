import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../modals/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {
  formData: any[] = [
    {"label": "First Name", "formControlName": "firstName"},
    {"label": "Last Name", "formControlName": "lastName"},
    {"label": "Email", "formControlName": "email"},
    {"label": "First Hobby", "formControlName": "hobby1"},
    {"label": "Second Hobby", "formControlName": "hobby2"},
    {"label": "Third Hobby", "formControlName": "hobby3"},
  ];
  userForm: FormGroup = new FormGroup({});
  users: User[] = [];
  preview = false;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.userForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      hobby1: new FormControl('', Validators.required),
      hobby2: new FormControl('', Validators.required),
      hobby3: new FormControl('', Validators.required),
      hobbies: new FormArray([])
    });
  }

  get f() { return this.userForm.controls; }
  get formValue() { return this.userForm.value; }
  get h() { return this.f.hobbies as FormArray; }
  get hobbiesFormGroups() { return this.h.controls as FormGroup[]; }

  addAdditionalHobby() {
      this.h.push(this.fb.group({
        addHobby: [''],
    }))
  }

  removeAdditionalHobby(index: number) {
    this.h.removeAt(index);
  }

  resetForm(): void {
    this.userForm.reset();
  }

  viewFormData() {
    this.preview = true;
  }

  removePreview() {
    this.preview = false;
  }

  onSubmit() {
    if (this.userForm.valid) {
       this.userService.createUser(this.formValue);
       this.router.navigate(['list']);
       this.resetForm();
    }
  }
}
