import { Component, OnInit, ViewChild } from '@angular/core';
import {Chart} from 'chart.js';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-co2-monthly',
  templateUrl: './co2-monthly.page.html',
  styleUrls: ['./co2-monthly.page.scss'],
})
export class Co2MonthlyPage implements OnInit {

  @ViewChild('barCanvas') barCanvas
  barChart: any;
constructor(public navCtrl : NavController) { }

ngOnInit() {

  this.barChart = new Chart(this.barCanvas.nativeElement, {

      type: 'bar',
      data: {
          labels: ["November", "December", "January", "February", "March", "April"],
          datasets: [{
              label: '# Monthly Carbon ',
              data: [20, 75, 35, 20, 30, 55, 5],
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

