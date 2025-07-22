import { Component, inject } from '@angular/core';
import { LoginformComponent } from './loginform/loginform.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  readonly dialog = inject(MatDialog);
  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(LoginformComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
