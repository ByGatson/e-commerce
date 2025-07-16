import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterFormComponent } from './register-form/register-form.component';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  readonly dialog = inject(MatDialog);

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(RegisterFormComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
 