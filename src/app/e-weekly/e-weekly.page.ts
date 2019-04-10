import { Component, OnInit, ViewChild } from '@angular/core';
import {Chart} from 'chart.js';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-e-weekly',
  templateUrl: './e-weekly.page.html',
  styleUrls: ['./e-weekly.page.scss'],
})
export class EWeeklyPage implements OnInit {

  @ViewChild('barCanvas') barCanvas
    barChart: any;
  constructor(public navCtrl : NavController) { }

  ngOnInit() {
  
    this.barChart = new Chart(this.barCanvas.nativeElement, {

        type: 'horizontalBar',
        data: {
            labels: ["-5_Weeks", "-4_Weeks", "-3_Weeks", "-2_Weeks", "-1_Weeks", "Current_Week"],
            datasets: [{
                label: '# Weekly Electricity',
                data: [7.0, 3.2, 7.5, 3.8, 1.5, 2.0, 3.5],
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
