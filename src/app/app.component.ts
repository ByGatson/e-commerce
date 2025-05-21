import { Component, OnInit } from '@angular/core';
import {
  AlertifyService,
  MessagePosition,
  MessageType,
} from './core/services/admin/alertify.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{
  title = 'e-commerce';
  constructor(private spinner: NgxSpinnerService) {

  }
  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 5000);

  }
}
