import { Component, EventEmitter, Input,Output } from '@angular/core';
import { AdminProductService } from '../../service/admin-product.service';
import { take } from 'rxjs';
import { Product } from '../../../../../core/models/product.dto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  ToastrAlertifyService,
  ToastrMessageType,
} from '../../../../../core/services/client/alertify.service';

@Component({
  selector: 'app-product-edit',
  standalone: false,
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.scss',
})
export class ProductEditComponent {
  @Output() isEdited: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() isClosed: EventEmitter<boolean> = new EventEmitter<boolean>();

  editForm!: FormGroup;
  
  constructor(
    private alertifyService: ToastrAlertifyService,
    private productService: AdminProductService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  private create(product: Product): void {
    this.productService
      .create(product)
      .pipe(take(1))
      .subscribe((data) => {
        console.log(data);
        this.alertifyService.message('created product', 'Success', {
          messageType: ToastrMessageType.Success,
        });
        this.isEdited.emit(true);
      });
  }

  public onSubmit(): void {
    this.create(this.editForm.value);
  }

  private createForm(): void {
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      stock: [0, [Validators.required, Validators.min(0)]],
      price: [0, [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
    });
  }

  onClose():void{
    this.isClosed.emit(true);
  }
}
