import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { iPerson } from 'src/app/shared/models/iuser';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  userId!: number;
  userObj!: iPerson;
  updatedData!: iPerson;

  constructor(
    private _route: ActivatedRoute,
    private _userService: UsersService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this.userId = +params['id']; // Use '+' to convert the id to a number
      // console.log(this.userId);
      this.userObj = this._userService.getSelectedUser(this.userId)!;

      // console.log( 'updated data' , this.updatedData);
    });
  }

  onUpdate() {
    this.updatedData = { ...this.userObj };

    let obj: iPerson = {
      id: this.updatedData.id,
      firstName: this.updatedData.firstName,
      MiddleName: this.updatedData.MiddleName,
      surName: this.updatedData.surName,
      dateOfBirth: this.updatedData.dateOfBirth,
      nativePlace: this.updatedData.nativePlace,
      profession: this.updatedData.profession,
      canEdit: this.updatedData.canEdit,
    };
    this._userService.uppUserData(obj);
    this.userObj = this.updatedData;

    console.log(this.updatedData);

    this._router.navigate(['users', this.userId]);
  }
}
