import { Component, OnInit, ViewChild } from '@angular/core';
import {Chart} from 'chart.js';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-chart3d',
  templateUrl: './chart3d.page.html',
  styleUrls: ['./chart3d.page.scss'],
})
export class Chart3dPage implements OnInit {

  @ViewChild('barCanvas') barCanvas
  barChart: any;
constructor(public navCtrl : NavController) { }

ngOnInit() {

  this.barChart = new Chart(this.barCanvas.nativeElement, {

      type: 'radar',
      data: {
          labels: ["November", "December", "January", "February", "March"],
          datasets: [
            {
              label: '#Carbon',
              fill: true,
              backgroundColor: "rgba(179,181,198,0.2)",
              borderColor: "rgba(255,99,132,1)",
              pointBorderColor: "#fff",
              pointBackgroundColor: "rgba(179,181,198,1)",
              data: [35.48,54.16,29.61,38.06,14.45]
          },{
            label: '#Electricity',
              fill: true,
              backgroundColor: "rgb(0,0,255,0.7)",
              borderColor: "rgb(0,255,255,0.5)",
              pointBorderColor: "#fff",
              pointBackgroundColor: "rgb(0,0,128,0.4)",
              data: [28.77,55.61,21.69,36.62,36.82]
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'Distribution of '
          }
        },
      
    });
  }
}