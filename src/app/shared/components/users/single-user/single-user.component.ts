import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { iPerson } from 'src/app/shared/models/iuser';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss'],
})
export class SingleUserComponent implements OnInit {
  selectedUser!: iPerson;
  userId!: number;
  canEdit: number = 0;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _userService: UsersService
  ) {}

  ngOnInit(): void {

    this._route.params
    .subscribe((param : Params)=> {
      this.userId = +param['id'];
      // console.log(this.userId);
      this.selectedUser = this._userService.getSelectedUser(this.userId)! ;
      // console.log(this.selectedUser);
      this.canEdit = this.selectedUser.canEdit
      
      
    })




    // this.userId = +this._route.snapshot.params['id'];
    // console.log(this.userId);
    // this.selectedUser = this._userService.getSelectedUser(this.userId)!;
    // console.log(this.selectedUser);
    // this.canEdit = this.selectedUser.canEdit;
    // console.log(this.canEdit);
  }

  goToEdite() {
    this._router.navigate(['editInfo'], { relativeTo: this._route });
  }
}
