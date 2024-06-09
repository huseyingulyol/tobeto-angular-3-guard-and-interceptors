import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})

export class ProductsComponent {
  productService = inject(ProductService);

  ProductList : IProduct[] = [];
  
  ngOnInit() {   
    this.productService.getAll().subscribe((data) => { 
      this.ProductList = data;
      console.log(this.ProductList);
    });
  }
}
