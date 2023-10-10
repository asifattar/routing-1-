import { Component, OnInit } from '@angular/core';
import { iproduct } from '../../models/iproduct';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  prodArray : iproduct[] = []
  selectedprod !: number 

  constructor(private _productServices : ProductsService) { }

  ngOnInit(): void {
    this.prodArray = this._productServices.getAllProduct()
    this.selectedprod = this.prodArray[0].id
    console.log(this.prodArray);
    
  }



 

}
