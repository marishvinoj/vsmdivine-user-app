import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { UserService } from '../users/UserService';
import { User } from '../../model/user';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-form',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  providers: [HttpClient],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', Validators.required],
      Gender: [true, Validators.required],
      MobileNumber: ['', Validators.required],
      EmailId: ['', Validators.required],
      Dob: ['', Validators.required],
      Address: ['', Validators.required],
      Pincode: ['']
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const user: User = this.userForm.value;
      this.userService.addUser(user).subscribe(
        () => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User added successfully' });
          this.userForm.reset();
        },
        (error) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to add user' });
        }
      );
    }
  }
}