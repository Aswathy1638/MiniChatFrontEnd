import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent  implements OnInit{
  userList: any[]=[];
   isLoading : boolean=true;
  /**
   *
   */
  constructor(private userService :UserService) {}
  ngOnInit(): void {
    this.loadUserList();
  }
  loadUserList() {
    this.userService.GetUserList().subscribe(
      (users:any[])=>{
        this.userList=users;
        this.isLoading=false;
      },
      (error)=>{
        console.log("Error Occured while fetching users",error);
        this.isLoading=false;
      }
      
    )
  }

}
