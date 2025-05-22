import { Component } from '@angular/core';
import { HttpClientService } from '../../../../core/services/common/http-client.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  products: any[] = [];
  constructor(private httpService: HttpClientService) {
    this.httpService
      .get<any[]>({ controller: 'Products', action: 'getall' })
      .pipe(take(1))
      .subscribe((data) => {
        this.products = data;
        console.log(this.products);
      });
  }
}
