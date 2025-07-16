import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { passwordMatchValidator } from '../../../../../core/validators/same-password-validator';
import { RegisterService } from '../../services/register.service';
import { take } from 'rxjs';
import { ToastrAlertifyService, ToastrMessageType } from '../../../../../core/services/client/alertify.service';
import { User } from '../../../../../core/models/user.dto';

@Component({
  selector: 'app-register-form',
  standalone: false,
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss',
})
export class RegisterFormComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<RegisterFormComponent>);
  editForm: FormGroup | any;

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService,
    private alertifyService: ToastrAlertifyService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.editForm = this.fb.group(
      {
        fullName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        userName: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      { validators: passwordMatchValidator('password', 'confirmPassword') }
    );
  }
  private createUser(user: User):void{
    this.registerService.create(user).pipe(take(1)).subscribe(
      {
        next: (success) => {
          if (success) {
            this.alertifyService.message(
              'Kayıt',
              'Success',
              { messageType: ToastrMessageType.Success }
            );
          }
        },
        error: (errorMessage) => {
          this.alertifyService.message(
            errorMessage ?? 'Bir hata oluştu.',
            'Error',
            {
              messageType: ToastrMessageType.Error,
            }
          );
        },
      }
    );
  }
  public onSubmit(): void {
    this.createUser(this.editForm.value);
  }
}
