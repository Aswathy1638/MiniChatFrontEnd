import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private apiUrl='https://localhost:7298/api/Messages';
  constructor(private http:HttpClient) { }

  getConversationHistory(userId:number):Observable<any[]>{
    const url=`${this.apiUrl}/${userId}`

    const jwtToken = localStorage.getItem('jwtToken');

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${jwtToken}`
    });
    return this.http.get<any[]>(url,{ headers: headers });
  }
}
