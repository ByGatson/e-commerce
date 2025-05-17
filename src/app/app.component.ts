import { Component } from '@angular/core';
import {
  AlertifyService,
  MessagePosition,
  MessageType,
} from './core/services/admin/alertify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'e-commerce';
  constructor(private alertifyService: AlertifyService) {
    alertifyService.message({
      message: 'Başarısız',
      position: MessagePosition.BottomCenter,
      type: MessageType.Success,
    });
  }
}
