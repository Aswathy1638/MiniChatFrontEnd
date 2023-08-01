import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ConversationhistoryComponent } from './conversationhistory/conversationhistory.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { RequestLogsComponent } from './request-logs/request-logs.component';


@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    LoginComponent,
    UserlistComponent,
    ConversationhistoryComponent,
    RequestLogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
