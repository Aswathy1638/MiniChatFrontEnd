import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegisterComponent } from './user-register/user-register.component';
import {LoginComponent} from './login/login.component';
import {UserlistComponent} from './userlist/userlist.component';
import {ConversationhistoryComponent} from './conversationhistory/conversationhistory.component'
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component: UserRegisterComponent},
 {path:'chat/user/:userId',component:ConversationhistoryComponent},
  {path:'chat',component:UserlistComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
