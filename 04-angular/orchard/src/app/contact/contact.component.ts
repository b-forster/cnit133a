import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  emailForm: FormGroup;
  submitted = false;
  valid = false;

  constructor(private fb: FormBuilder) {
    this.emailForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      emailAddress: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    })
  }

  hasUserInput() {
    return !this.emailForm.pristine;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.emailForm.invalid) {
      this.valid = true;
    }
  }
}
