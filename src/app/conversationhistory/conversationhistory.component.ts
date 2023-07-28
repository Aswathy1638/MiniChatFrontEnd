import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MessageService} from '../services/message.service'

@Component({
  selector: 'app-conversationhistory',
  templateUrl: './conversationhistory.component.html',
  styleUrls: ['./conversationhistory.component.css']
})
export class ConversationhistoryComponent implements OnInit {
  conversationId!: number;
  messages :any[]=[];
  isLoading!: boolean;
 
  /**
   *
   */
  constructor(private route:ActivatedRoute,private messageSevice:MessageService) { } 
  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      const userIdParam = params.get('userId');
      this.conversationId = userIdParam !== null ? +userIdParam : -1;
      this.loadConversationHistory();
    });
   
  }

 loadConversationHistory() {
   this.messageSevice.getConversationHistory(this.conversationId).subscribe(
    (messages:any[])=>{
      this.messages=messages;
      this.isLoading=false;
    },
    (error)=>
    {
      console.log('error in fetching history',error);
      this.isLoading=false;
    }
   );
  
  
  }

}