import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrAlertifyService } from '../../../../../core/services/client/alertify.service';

@Component({
  selector: 'app-loginform',
  standalone: false,
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.scss',
})
export class LoginformComponent {
  readonly dialogRef = inject(MatDialogRef<LoginformComponent>);
  public editForm: FormGroup | any;
  constructor(
    private fb: FormBuilder,
    private alertifyService: ToastrAlertifyService
  ) {
    this.createForm();
  }
  onSubmit(): void {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  private createForm(): void {
    this.editForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
}
