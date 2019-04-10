import { Component, OnInit , ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-e-monthly',
  templateUrl: './e-monthly.page.html',
  styleUrls: ['./e-monthly.page.scss'],
})
export class EMonthlyPage implements OnInit {
  @ViewChild('barCanvas') barCanvas
  barChart: any;
constructor(public navCtrl : NavController) { }

ngOnInit() {

  this.barChart = new Chart(this.barCanvas.nativeElement, {

      type: 'bar',
      data: {
        labels: ["November", "December", "January", "February", "March", "April"],
          datasets: [{
              label: '# Monthly Electricity Levels',
              data: [7.5, 9.6, 3.3, 5.0, 7.8, 5.5, 1.2 ],
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
