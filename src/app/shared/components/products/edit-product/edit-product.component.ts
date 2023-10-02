import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { iproduct } from 'src/app/shared/models/iproduct';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  prodId!: number;
  prodObj!: iproduct;
  updatedProduct!: iproduct; // Remove the initial assignment
  canEdit : number = 0;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.prodId = +this._route.snapshot.params['productId'];
    this.prodObj = this._productService.getSelectedMob(this.prodId)!;
    this.updatedProduct = { ...this.prodObj }; // Initialize the updated product with the current values
    console.log(this.updatedProduct);

    this._route.queryParams.subscribe((queryParams: Params) => {
      console.log(queryParams);
       this.canEdit = +queryParams['canEdit']
      //  console.log(this.canEdit);
    });
  }

  onUpdate() {
    // Create a new object with updated values
    const updatedValues: iproduct = {
      id: this.prodObj.id, // Include the id property
      name: this.prodObj.name,
      brand: this.prodObj.brand,
      price: this.prodObj.price,
      spec: {
        camera: this.prodObj.spec.camera,
        frontCamera: this.prodObj.spec.frontCamera,
        backCamera: this.prodObj.spec.backCamera,
        processor: this.prodObj.spec.processor,
        battery: this.prodObj.spec.battery,
        display: this.prodObj.spec.display,
        ram: this.prodObj.spec.ram,
        rom: this.prodObj.spec.rom,
      },
      imageUrl: this.prodObj.imageUrl,
      isAvailable: this.prodObj.isAvailable,
      canReturn: this.prodObj.canReturn,
    };
    
    // You can now use `updatedValues` to send to your update service
    this._productService.updateProdInfo(updatedValues);

    this._router.navigate(['products/', this.prodId]);
  }
}

// onUpdate() {
//   // this._productService.updateProdInfo(this.updatedProduct);
//   const updatedValues = {
//     id: this.prodObj.id,
//     name: this.prodObj.name,
//     brand: this.prodObj.brand,
//     price: this.prodObj.price,
//     spec: {
//       frontCamera: this.prodObj.spec.frontCamera,
//       backCamera: this.prodObj.spec.backCamera,
//       processor: this.prodObj.spec.processor,
//       battery: this.prodObj.spec.battery,
//       display: this.prodObj.spec.display,
//       ram: this.prodObj.spec.ram,
//       rom: this.prodObj.spec.rom
//     },
//     imageUrl: this.prodObj.imageUrl,
//     isAvailable: this.prodObj.isAvailable
//   };
//   this._productService.updateProdInfo(updatedValues);
// }
