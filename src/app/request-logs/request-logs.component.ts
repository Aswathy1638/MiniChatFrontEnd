import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {LogsService} from '../services/logs.service'

@Component({
  selector: 'app-request-logs',
  templateUrl: './request-logs.component.html',
  styleUrls: ['./request-logs.component.css']
})
export class RequestLogsComponent implements OnInit{
  logs: any[] = [];
  selectedTimeframe: string = '5'; // Default: Last 5 mins
  customStartTime: string = '';
  customEndTime: string = '';
  showIdColumn: boolean = true;
  showIpColumn: boolean = true;
  showUsernameColumn: boolean = true;
  showRequestBodyColumn: boolean = true;
  showTimeStampColumn: boolean = true;
  Logs!: any[];
  constructor(
    private logsService:LogsService
  ){}
  ngOnInit(): void {
    this.loadLogs();
  }
  loadLogs() {
    let startTime: Date;
    let endTime: Date;

    if (this.selectedTimeframe === 'custom') {
      startTime = new Date(this.customStartTime);
      endTime = new Date(this.customEndTime);
    } else {
      endTime = new Date();
      startTime = new Date();
      startTime.setMinutes(startTime.getMinutes() - parseInt(this.selectedTimeframe));
    }

    this.logsService.getLogs(startTime.toISOString(), endTime.toISOString())
      .subscribe(
        (data: any) => { // Use 'any' type here or replace with the actual type of logs data
          this.logs = data['Logs']; // Access 'Logs' property directly
        },
        (error) => {
          console.log('Error fetching logs:', error);
        }
      );
  }

  onTimeframeChange(): void {
    if (this.selectedTimeframe !== 'custom') {
      this.customStartTime = '';
      this.customEndTime = '';
    }
  }
  }


