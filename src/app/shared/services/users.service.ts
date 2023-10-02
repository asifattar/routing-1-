import { Injectable } from '@angular/core';
import { iPerson } from '../models/iuser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userArray: iPerson[] = [
    {
      id: 1,
      firstName: 'John',
      MiddleName: 'Doe',
      surName: 'Smith',
      dateOfBirth: new Date(1990, 5, 15),
      nativePlace: 'New York',
      profession: 'Engineer',
      canEdit : 0
    },
    {
      id: 2,
      firstName: 'Jane',
      MiddleName: 'Doe',
      surName: 'Johnson',
      dateOfBirth: new Date(1985, 8, 20),
      nativePlace: 'Los Angeles',
      profession: 'Doctor',
      canEdit : 1
    },
    {
      id: 3,
      firstName: 'Alice',
      MiddleName: 'Johnson',
      surName: 'Brown',
      dateOfBirth: new Date(1992, 3, 10),
      nativePlace: 'Chicago',
      profession: 'Teacher',
      canEdit : 1
    },
    {
      id: 4,
      firstName: 'Bob',
      MiddleName: 'Smith',
      surName: 'Davis',
      dateOfBirth: new Date(1980, 11, 5),
      nativePlace: 'San Francisco',
      profession: 'Artist',
      canEdit : 1
    },
    {
      id: 5,
      firstName: 'Eva',
      MiddleName: 'Anderson',
      surName: 'Wilson',
      dateOfBirth: new Date(1995, 2, 25),
      nativePlace: 'Miami',
      profession: 'Lawyer',
      canEdit : 0
    },
    {
      id: 6,
      firstName: 'Michael',
      MiddleName: 'Williams',
      surName: 'Taylor',
      dateOfBirth: new Date(1982, 7, 30),
      nativePlace: 'Houston',
      profession: 'Software Developer',
      canEdit : 1
    },
    {
      id: 7,
      firstName: 'Sarah',
      MiddleName: 'Brown',
      surName: 'Clark',
      dateOfBirth: new Date(1993, 1, 8),
      nativePlace: 'Boston',
      profession: 'Nurse',
      canEdit : 0
    },
    {
      id: 8,
      firstName: 'David',
      MiddleName: 'Miller',
      surName: 'White',
      dateOfBirth: new Date(1987, 4, 12),
      nativePlace: 'Seattle',
      profession: 'Architect',
      canEdit : 1
    },
    {
      id: 9,
      firstName: 'Olivia',
      MiddleName: 'Wilson',
      surName: 'Martin',
      dateOfBirth: new Date(1989, 9, 18),
      nativePlace: 'Denver',
      profession: 'Accountant',
      canEdit : 1
    },
    {
      id: 10,
      firstName: 'William',
      MiddleName: 'Jones',
      surName: 'Harris',
      dateOfBirth: new Date(1991, 6, 3),
      nativePlace: 'Atlanta',
      profession: 'Marketing Manager',
      canEdit : 0
    },
  ];

  constructor() { }


  getAllUsers(){
    return this.userArray
  }

  getSelectedUser(id : number){
    return this.userArray.find( user => user.id === id)
  }

  // updateUser(id : number){
  //   return this.userArray.find((user) => user.id === id)
  // }

  uppUserData(userObj: iPerson) {
    this.userArray.forEach((obj) => {
      if (obj.id === userObj.id) {
        obj.firstName = userObj.firstName
        obj.MiddleName = userObj.MiddleName
        obj.surName = userObj.surName
        obj.nativePlace = userObj.nativePlace
        obj.profession = userObj.profession
        obj.dateOfBirth = userObj.dateOfBirth
        obj.canEdit = userObj.canEdit

      //   (obj.brand = pObj.brand),
      //   obj.imageUrl = pObj.imageUrl);
      //   obj.isAvailable = pObj.isAvailable;
      //   obj.name = pObj.name;
      //   obj.price = pObj.price;
      //   obj.spec.backCamera = pObj.spec.backCamera;
      //   obj.spec.battery = pObj.spec.battery;
      //   obj.spec.camera = pObj.spec.camera;
      //   obj.spec.display = pObj.spec.display;
      //   obj.spec.frontCamera = pObj.spec.frontCamera;
      //   obj.spec.processor = pObj.spec.processor;
      //   obj.spec.ram = pObj.spec.ram;
      //   obj.spec.rom = pObj.spec.rom;
      }
    });



  }}