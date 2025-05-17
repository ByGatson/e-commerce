import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
declare var alertify: any;
@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  constructor(private messageService: MessageService) {}
  products: any[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 1500,
      stock: 10,
      category: 'Electronics',
      description:
        'This high-performance laptop is equipped with the latest Intel Core i7 processor, 16GB of RAM, and a 512GB SSD. Perfect for multitasking, software development, and gaming. Its sleek aluminum design and 15.6-inch full HD display make it a top choice for professionals and power users.',
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 999,
      stock: 5,
      category: 'Electronics',
      description:
        'Experience lightning-fast performance with this flagship smartphone featuring a Snapdragon 8 Gen processor, 12GB RAM, and 256GB internal storage.',
    },
    {
      id: 3,
      name: 'Headphones',
      price: 199,
      stock: 20,
      category: 'Accessories',
      description:
        'Immerse yourself in rich, high-fidelity audio with these over-ear noise-cancelling headphones. Designed for comfort during long listening sessions, they feature Bluetooth 5.2, 40 hours of battery life, and built-in voice assistant compatibility.',
    },
    {
      id: 4,
      name: 'Laptop',
      price: 1500,
      stock: 10,
      category: 'Electronics',
      description:
        'This high-performance laptop is equipped with the latest Intel Core i7 processor, 16GB of RAM, and a 512GB SSD. Perfect for multitasking, software development, and gaming. Its sleek aluminum design and 15.6-inch full HD display make it a top choice for professionals and power users.',
    },
    {
      id: 5,
      name: 'Smartphone',
      price: 999,
      stock: 5,
      category: 'Electronics',
      description:
        'Experience lightning-fast performance with this flagship smartphone featuring a Snapdragon 8 Gen processor, 12GB RAM, and 256GB internal storage.',
    },
    {
      id: 6,
      name: 'Headphones',
      price: 199,
      stock: 20,
      category: 'Accessories',
      description:
        'Immerse yourself in rich, high-fidelity audio with these over-ear noise-cancelling headphones. Designed for comfort during long listening sessions, they feature Bluetooth 5.2, 40 hours of battery life, and built-in voice assistant compatibility.',
    },
  ];

  showSuccessMessage(): void {
alertify.alert("hello");
  }
}
