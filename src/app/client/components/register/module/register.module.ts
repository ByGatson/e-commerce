import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from '../component/register.component';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RegisterFormComponent } from '../component/register-form/register-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from '../../login/module/login.module';

@NgModule({
  declarations: [RegisterComponent,RegisterFormComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[RegisterComponent]
})
export class RegisterModule {}
