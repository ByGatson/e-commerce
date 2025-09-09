import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import {
  AlertifyService,
  MessagePosition,
  MessageType,
} from './core/services/admin/alertify.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit{
  title = 'e-commerce';
  navItems = [
    { label: 'Admin', icon: 'pi pi-user', routerLink: '/admin' },
  ];
  constructor(private spinner: NgxSpinnerService) {

  }
  ngOnInit(): void {
  
  }  
}
