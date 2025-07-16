import { Component } from '@angular/core';
import { HttpClientService } from '../../../../core/services/common/http-client.service';
import { take } from 'rxjs';
import { AdminProductService } from '../../../../core/services/common/product/admin-product.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {  
}
