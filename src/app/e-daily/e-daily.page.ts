import { Component, OnInit, ViewChild } from '@angular/core';
import {Chart} from 'chart.js';
import { NavController } from '@ionic/angular';
import { PowerService } from '../services/power.service';
import { dataset } from '../dataset';

@Component({
  selector: 'app-e-daily',
  templateUrl: './e-daily.page.html',
  styleUrls: ['./e-daily.page.scss'],
})
export class EDailyPage implements OnInit {
    @ViewChild('barCanvas') barCanvas
    barChart: any;
  constructor(public navCtrl : NavController) { }

  ngOnInit() {
  
    this.barChart = new Chart(this.barCanvas.nativeElement, {

        type: 'line',
        data: {
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            datasets: [{
                label: '# Daily Electricity Levels',
                data: [6.0, 3.0, 2.5, 2.0, 5.3, 4.4, 9.5],
                backgroundColor: [
                    'rgb(0,0,255,0.6)',
                    'rgb(0,0,255,0.6)',
                    'rgb(0,0,255,0.6)',
                    'rgb(0,0,255,0.6)',
                    'rgb(0,0,255,0.6)',
                    'rgb(0,0,255,0.6)',
                    'rgb(0,0,255,0.6)'
                ],
                borderColor: [
                    'rgb(0,0,255,0)',
                    'rgb(0,0,255,0)',
                    'rgb(0,0,255,0)',
                    'rgb(0,0,255,0)',
                    'rgb(0,0,255,0)',
                    'rgb(0,0,255,0)',
                    'rgb(0,0,255,0)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }

    });
  }
}