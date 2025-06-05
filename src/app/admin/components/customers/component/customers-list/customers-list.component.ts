import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Customer, CustomerService } from '../../service/customer.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-customers-list',
  standalone: false,
  templateUrl: './customers-list.component.html',
  styleUrl: './customers-list.component.scss',
})
export class CustomersListComponent {
  page: number = 1;
  pageSize: number = 10;
  customers: Customer[] = [];      // Visible paginated customers
  allCustomers: Customer[] = [];   // All data from API

  constructor(private customerService: CustomerService) {
    this.customerService.getAll().subscribe((data) => {
      this.allCustomers = data;
      this.refreshCustomers();
    });
  }

  refreshCustomers(): void {
    this.customers = this.allCustomers
      .slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
  }
  onPageSizeChange(): void {
  this.page = 1; // Sayfa boyutu değişince baştan başla
  this.refreshCustomers();
}

}
