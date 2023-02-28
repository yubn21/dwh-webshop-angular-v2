import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent {
  contactForm = this.formBuilder.group({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(): void {
    Swal.fire('Success', 'Your message has been sent', 'success');
    this.contactForm.reset();
  }
}
