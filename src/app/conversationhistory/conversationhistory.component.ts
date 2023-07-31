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
  userId!: number;
 
  /**
   *
   */
  constructor(private route:ActivatedRoute,private messageSevice:MessageService) { } 
  ngOnInit(): void {
     // Get the userId from the route parameter
  this.route.paramMap.subscribe(params => {
    const userIdString = params.get('userId');
    if (userIdString !== null) {
      this.userId = parseInt(userIdString, 10);
      // Call the service method to get the conversation history
      this.loadConversationHistory();
    } else {
      console.error('Invalid userId');
    }
  });
   
  }

 loadConversationHistory() {
   this.messageSevice.getConversationHistory(this.userId).subscribe(
    (data) => {
      this.messages = data;
      this.isLoading = false;
    },
    (error)=>
    {
      console.log('error in fetching history',error);
      this.isLoading=false;
    }
   );
  
  
  }

}