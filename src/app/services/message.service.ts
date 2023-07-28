import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private apiUrl='https://localhost:7298/api/Messages';
  constructor(private http:HttpClient) { }
  getConversationHistory(userId:number):Observable<any[]>{
    const url=`${this.apiUrl}/${userId}`
    return this.http.get<any[]>(this.apiUrl);
  }
}
