import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { iproduct } from 'src/app/shared/models/iproduct';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent implements OnInit {
  productId!: number;
  prodObj!: iproduct;
  canEdit : number = 1

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _productService: ProductsService
  ) {}

  ngOnInit(): void {

    this._route.params
    .subscribe((param : Params) => {
      this.productId = +param['id'] ; 
      this.prodObj = this._productService.getSelectedMob(this.productId)!
      console.log(this.prodObj);
      this.canEdit = this.prodObj.canReturn;
      console.log(this.canEdit,'can edit');      
    })



    // console.log(this._route.snapshot.params);
    // this.productId = +this._route.snapshot.params['id'];
    // this.prodObj = this._productService.getSelectedMob(this.productId)!;
    // console.log(this.prodObj);
    // this.canEdit = this.prodObj.canReturn;

    
    // console.log('chek can edit',this.canEdit);
    
  }

  goToEdite() {
    this._router.navigate(['products', this.productId, 'edit'],
    {queryParamsHandling : 'preserve'});   
  }
}

