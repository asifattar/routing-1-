import { Injectable } from '@angular/core';
import { iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  mobiles: iproduct[] = [
    {
      id: 1,
      name: 'iPhone 13',
      brand: 'Apple',
      price: 999,
      spec: {
        camera: 'Triple rear camera',
        frontCamera: '12 MP',
        processor: 'A15 Bionic',
        battery: 'Li-Ion 3095 mAh',
        display: '6.1 inches Super Retina XDR OLED',
        ram: '8',
        rom: '512',
        backCamera: 48,
      },
      imageUrl: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13.jpg',
      isAvailable: true,
      canReturn : 1
      
    },
    {
      id: 2,
      name: 'Samsung Galaxy S21',
      brand: 'Samsung',
      price: 899,
      spec: {
        camera: 'Triple rear camera',
        frontCamera: '10 MP',
        processor: 'Exynos 2100 / Snapdragon 888',
        battery: 'Li-Ion 4000 mAh',
        display: '6.2 inches Dynamic AMOLED 2X',
        ram: '16',
        rom: '564',
        backCamera: 64,
      },
      imageUrl:
        'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s21-ultra-5g-.jpg',
        isAvailable: true,
      canReturn : 0
    },
    {
      id: 3,
      name: 'Google Pixel 6',
      brand: 'Google',
      price: 799,
      spec: {
        camera: 'Dual rear camera',
        frontCamera: '8 MP',
        processor: 'Google Tensor',
        battery: 'Li-Ion 4600 mAh',
        display: '6.4 inches AMOLED',
        ram: '12',
        rom: '264',
        backCamera: 12.2,
      },
      imageUrl: 'https://fdn2.gsmarena.com/vv/bigpic/google-pixel-6a.jpg',
      isAvailable: true,
      canReturn : 1
    },
    {
      id: 4,
      name: 'OnePlus 9 Pro',
      brand: 'OnePlus',
      price: 899,
      spec: {
        camera: 'Quad rear camera',
        frontCamera: '16 MP',
        processor: 'Snapdragon 888',
        battery: 'Li-Po 4500 mAh',
        display: '6.7 inches Fluid AMOLED',
        ram: '8',
        rom: '256',
        backCamera: 50,
      },
      imageUrl: 'https://fdn2.gsmarena.com/vv/bigpic/oneplus-9-pro-.jpg',
      isAvailable: true,
      canReturn : 1
    },
    {
      id: 5,
      name: 'Xiaomi Mi 11',
      brand: 'Xiaomi',
      price: 799,
      spec: {
        camera: 'Triple rear camera',
        frontCamera: '20 MP',
        processor: 'Snapdragon 888',
        battery: 'Li-Po 4600 mAh',
        display: '6.81 inches AMOLED',
        ram: '6',
        rom: '128',
        backCamera: 100,
      },
      imageUrl: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi11.jpg',
      isAvailable: true,
      canReturn : 0
    },
    {
      id: 6,
      name: 'Sony Xperia 1 III',
      brand: 'Sony',
      price: 1099,
      spec: {
        camera: 'Quad rear camera',
        frontCamera: '8 MP',
        processor: 'Snapdragon 888',
        battery: 'Li-Po 4500 mAh',
        display: '6.5 inches OLED',
        ram: '4',
        rom: '64',
        backCamera: 68,
      },
      imageUrl: 'https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-iii.jpg',
      isAvailable: true,
      canReturn : 1
    },
    {
      id: 7,
      name: 'LG Velvet 2+',
      brand: 'LG',
      price: 699,
      spec: {
        camera: 'Triple rear camera',
        frontCamera: '16 MP',
        processor: 'Snapdragon 888',
        battery: 'Li-Po 4300 mAh',
        display: '6.8 inches OLED',
        ram: '6',
        rom: '64',
        backCamera: 24,
      },
      imageUrl: 'https://fdn2.gsmarena.com/vv/bigpic/lg-velvet-.jpg',
      isAvailable: true,
      canReturn : 0
    },
    {
      id: 8,
      name: 'Motorola Edge 20',
      brand: 'Motorola',
      price: 599,
      spec: {
        camera: 'Triple rear camera',
        frontCamera: '32 MP',
        processor: 'Snapdragon 778G',
        battery: 'Li-Po 4000 mAh',
        display: '6.7 inches OLED',
        ram: '8',
        rom: '128',
        backCamera: 50,
      },
      imageUrl:
        'https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-plus-2023.jpg',
        isAvailable: true,
      canReturn : 1
    },
    {
      id: 9,
      name: 'Huawei P50 Pro',
      brand: 'Huawei',
      price: 899,
      spec: {
        camera: 'Quad rear camera',
        frontCamera: '13 MP',
        processor: 'Kirin 9000',
        battery: 'Li-Po 4360 mAh',
        display: '6.6 inches OLED',
        ram: '12',
        rom: '564',
        backCamera: 100,
      },
      imageUrl: 'https://fdn2.gsmarena.com/vv/bigpic/huawei-p50-pro.jpg',
      isAvailable: true,
      canReturn : 0
    },
    {
      id: 10,
      name: 'Oppo Find X4 Pro',
      brand: 'Oppo',
      price: 849,
      spec: {
        camera: 'Quad rear camera',
        frontCamera: '32 MP',
        processor: 'Snapdragon 895',
        battery: 'Li-Po 4500 mAh',
        display: '6.7 inches AMOLED',
        ram: '16',
        rom: '1000',
        backCamera: 200,
      },
      imageUrl: 'https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x5-pro.jpg',
      isAvailable: true,
      canReturn : 1
    },
  ];

  constructor() {}

  getAllProduct() {
    return this.mobiles;
  }

  getSelectedMob(productId: number) {
    return this.mobiles.find((mob) => mob.id === productId);
  }



  updateProdInfo(pObj: iproduct) {
    this.mobiles.forEach((obj) => {
      if (obj.id === pObj.id) {
        (obj.brand = pObj.brand), (obj.imageUrl = pObj.imageUrl);
        obj.isAvailable = pObj.isAvailable;
        obj.name = pObj.name;
        obj.price = pObj.price;
        obj.spec.backCamera = pObj.spec.backCamera;
        obj.spec.battery = pObj.spec.battery;
        obj.spec.camera = pObj.spec.camera;
        obj.spec.display = pObj.spec.display;
        obj.spec.frontCamera = pObj.spec.frontCamera;
        obj.spec.processor = pObj.spec.processor;
        obj.spec.ram = pObj.spec.ram;
        obj.spec.rom = pObj.spec.rom;
      }
    });
  }
}
















// mobiles: iproduct[] = [
//   {
//     id: 1,
//     name: 'iPhone 13',
//     brand: 'Apple',
//     price: 999,
//     spec: {
//       camera: 'Triple rear camera',
//       frontCamera: '12 MP',
//       processor: 'A15 Bionic',
//       battery: 'Li-Ion 3095 mAh',
//       display: '6.1 inches Super Retina XDR OLED',
//       ram: '8',
//       rom: '512',
//       backCamera: 48,
//     },
//     imageUrl: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13.jpg',
//     isAvailable: true,
//   },
//   {
//     id: 2,
//     name: 'Samsung Galaxy S21',
//     brand: 'Samsung',
//     price: 899,
//     spec: {
//       camera: 'Triple rear camera',
//       frontCamera: '10 MP',
//       processor: 'Exynos 2100 / Snapdragon 888',
//       battery: 'Li-Ion 4000 mAh',
//       display: '6.2 inches Dynamic AMOLED 2X',
//       ram: '16',
//       rom: '564',
//       backCamera: 64,
//     },
//     imageUrl:
//       'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s21-ultra-5g-.jpg',
//     isAvailable: true,
//   },
//   {
//     id: 3,
//     name: 'Google Pixel 6',
//     brand: 'Google',
//     price: 799,
//     spec: {
//       camera: 'Dual rear camera',
//       frontCamera: '8 MP',
//       processor: 'Google Tensor',
//       battery: 'Li-Ion 4600 mAh',
//       display: '6.4 inches AMOLED',
//       ram: '12',
//       rom: '264',
//       backCamera: 12.2,
//     },
//     imageUrl: 'https://fdn2.gsmarena.com/vv/bigpic/google-pixel-6a.jpg',
//     isAvailable: true,
//   },
//   {
//     id: 4,
//     name: 'OnePlus 9 Pro',
//     brand: 'OnePlus',
//     price: 899,
//     spec: {
//       camera: 'Quad rear camera',
//       frontCamera: '16 MP',
//       processor: 'Snapdragon 888',
//       battery: 'Li-Po 4500 mAh',
//       display: '6.7 inches Fluid AMOLED',
//       ram: '8',
//       rom: '256',
//       backCamera: 50,
//     },
//     imageUrl: 'https://fdn2.gsmarena.com/vv/bigpic/oneplus-9-pro-.jpg',
//     isAvailable: true,
//   },
//   {
//     id: 5,
//     name: 'Xiaomi Mi 11',
//     brand: 'Xiaomi',
//     price: 799,
//     spec: {
//       camera: 'Triple rear camera',
//       frontCamera: '20 MP',
//       processor: 'Snapdragon 888',
//       battery: 'Li-Po 4600 mAh',
//       display: '6.81 inches AMOLED',
//       ram: '6',
//       rom: '128',
//       backCamera: 100,
//     },
//     imageUrl: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi11.jpg',
//     isAvailable: true,
//   },
//   {
//     id: 6,
//     name: 'Sony Xperia 1 III',
//     brand: 'Sony',
//     price: 1099,
//     spec: {
//       camera: 'Quad rear camera',
//       frontCamera: '8 MP',
//       processor: 'Snapdragon 888',
//       battery: 'Li-Po 4500 mAh',
//       display: '6.5 inches OLED',
//       ram: '4',
//       rom: '64',
//       backCamera: 68,
//     },
//     imageUrl: 'https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-iii.jpg',
//     isAvailable: true,
//   },
//   {
//     id: 7,
//     name: 'LG Velvet 2+',
//     brand: 'LG',
//     price: 699,
//     spec: {
//       camera: 'Triple rear camera',
//       frontCamera: '16 MP',
//       processor: 'Snapdragon 888',
//       battery: 'Li-Po 4300 mAh',
//       display: '6.8 inches OLED',
//       ram: '6',
//       rom: '64',
//       backCamera: 24,
//     },
//     imageUrl: 'https://fdn2.gsmarena.com/vv/bigpic/lg-velvet-.jpg',
//     isAvailable: true,
//   },
//   {
//     id: 8,
//     name: 'Motorola Edge 20',
//     brand: 'Motorola',
//     price: 599,
//     spec: {
//       camera: 'Triple rear camera',
//       frontCamera: '32 MP',
//       processor: 'Snapdragon 778G',
//       battery: 'Li-Po 4000 mAh',
//       display: '6.7 inches OLED',
//       ram: '8',
//       rom: '128',
//       backCamera: 50,
//     },
//     imageUrl:
//       'https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-plus-2023.jpg',
//     isAvailable: true,
//   },
//   {
//     id: 9,
//     name: 'Huawei P50 Pro',
//     brand: 'Huawei',
//     price: 899,
//     spec: {
//       camera: 'Quad rear camera',
//       frontCamera: '13 MP',
//       processor: 'Kirin 9000',
//       battery: 'Li-Po 4360 mAh',
//       display: '6.6 inches OLED',
//       ram: '12',
//       rom: '564',
//       backCamera: 100,
//     },
//     imageUrl: 'https://fdn2.gsmarena.com/vv/bigpic/huawei-p50-pro.jpg',
//     isAvailable: true,
//   },
//   {
//     id: 10,
//     name: 'Oppo Find X4 Pro',
//     brand: 'Oppo',
//     price: 849,
//     spec: {
//       camera: 'Quad rear camera',
//       frontCamera: '32 MP',
//       processor: 'Snapdragon 895',
//       battery: 'Li-Po 4500 mAh',
//       display: '6.7 inches AMOLED',
//       ram: '16',
//       rom: '1000',
//       backCamera: 200,
//     },
//     imageUrl: 'https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x5-pro.jpg',
//     isAvailable: true,
//   },
// ];