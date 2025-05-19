import { Component } from '@angular/core';
import {
  AlertifyService,
  MessagePosition,
  MessageType,
} from './core/services/admin/alertify.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'e-commerce';
  constructor(private alertifyService: AlertifyService, private toastr : ToastrService) {

  }
}
