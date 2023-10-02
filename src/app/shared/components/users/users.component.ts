import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { iPerson } from '../../models/iuser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  usersArray : Array<iPerson> = []
  selectedUser !: number

  constructor(private _userService : UsersService) { }

  ngOnInit(): void {
    this.usersArray = this._userService.getAllUsers()
    console.log(this.usersArray);   
    this.selectedUser = this.usersArray[0].id

  }

}
