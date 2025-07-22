import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginformComponent } from '../component/loginform/loginform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { LoginComponent } from '../component/login.component';
import { RegisterModule } from '../../register/module/register.module';


@NgModule({
  declarations: [LoginComponent, LoginformComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule, 
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
  exports:[LoginComponent]
})
export class LoginModule { }
