import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogsService {
  private baseUrl = 'https://localhost:7298/api/Logs';
  constructor(private http: HttpClient) { 
      }

      getLogs(startTime: string, endTime: string) {
        const token = localStorage.getItem('jwtToken');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
        return this.http.get(`${this.baseUrl}?startTime=${startTime}&endTime=${endTime}`,httpOptions);
      }
}
