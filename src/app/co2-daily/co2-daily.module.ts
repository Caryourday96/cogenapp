import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Co2DailyPage } from './co2-daily.page';

const routes: Routes = [
  {
    path: '',
    component: Co2DailyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Co2DailyPage]
})
export class Co2DailyPageModule {}
