import { Component, OnInit, ViewChild } from '@angular/core';
import {Chart} from 'chart.js';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-co2-weekly',
  templateUrl: './co2-weekly.page.html',
  styleUrls: ['./co2-weekly.page.scss'],
})
export class Co2WeeklyPage implements OnInit {

  @ViewChild('barCanvas') barCanvas
  barChart: any;
constructor(public navCtrl : NavController) { }

ngOnInit() {

  this.barChart = new Chart(this.barCanvas.nativeElement, {

      type: 'horizontalBar',
      data: {
          labels: ["-5_Weeks", "-4_Weeks", "-3_Weeks", "-2_Weeks", "-1_Weeks", "Current_Week"],
          datasets: [{
              label: '# Weekly Carbon',
              data: [10, 35, 20, 65, 15, 50],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(255,99,132,1)',
                  'rgba(255,99,132,1)',
                  'rgba(255,99,132,1)',
                  'rgba(255,99,132,1)',
                  'rgba(255,99,132,1)'
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
