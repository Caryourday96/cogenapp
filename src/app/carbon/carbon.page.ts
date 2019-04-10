import { NavController } from '@ionic/angular';
import { Co2DailyPage } from './../co2-daily/co2-daily.page';
import { Co2WeeklyPage } from './../co2-weekly/co2-weekly.page';
import { Co2MonthlyPage } from './../co2-monthly/co2-monthly.page';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carbon',
  templateUrl: './carbon.page.html',
  styleUrls: ['./carbon.page.scss'],
})
export class CarbonPage implements OnInit {

  constructor(public navCtrl : NavController) { }

  ngOnInit() {
    
  }
  public gotoDaily(){
    this.navCtrl.navigateRoot('Co2DailyPage');
  }
  public gotoWeekly(){
    this.navCtrl.navigateRoot('Co2WeeklyPage');
  }
  public gotoMonthly(){
    this.navCtrl.navigateRoot('Co2MonthlyPage');
  }
}
