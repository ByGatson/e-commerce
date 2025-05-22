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
  navItems = [
    
    { label: 'Products', icon: 'pi pi-shopping-cart', routerLink: '/products' },
    { label: 'Admin', icon: 'pi pi-user', routerLink: '/admin' },
    { label: 'Baskets', icon: 'pi pi-inbox', routerLink: '/baskets' }
  ];
  constructor(private spinner: NgxSpinnerService) {

  }
  ngOnInit(): void {
  
  }
}
