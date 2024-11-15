import { Component } from '@angular/core';
import productData from '../../app/products.json';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  Products: any = productData;
}
