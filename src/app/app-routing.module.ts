import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegisterComponent } from './user-register/user-register.component';
import {LoginComponent} from './login/login.component';
import {UserlistComponent} from './userlist/userlist.component'
const routes: Routes = [
  {path:'register',component: UserRegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'chat',component:UserlistComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
