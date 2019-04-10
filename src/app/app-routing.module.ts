
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
    
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'about',
    loadChildren: './about/about.module#AboutPageModule' 
  },
  { 
    path: 'carbon',
    loadChildren: './carbon/carbon.module#CarbonPageModule' 
  
  },
  { 
    path: 'co2-daily', 
    loadChildren: './co2-daily/co2-daily.module#Co2DailyPageModule',
    canActivate: [AuthGuard] 
  },
  { 
    path: 'co2-weekly', 
    loadChildren: './co2-weekly/co2-weekly.module#Co2WeeklyPageModule',
    canActivate: [AuthGuard]
  },
  { 
    path: 'co2-monthly',
    loadChildren: './co2-monthly/co2-monthly.module#Co2MonthlyPageModule',
    canActivate: [AuthGuard] 
  },
  { 
    path: 'e-daily',
    loadChildren: './e-daily/e-daily.module#EDailyPageModule',
    canActivate: [AuthGuard] 
  },
  { 
    path: 'e-weekly',
    loadChildren: './e-weekly/e-weekly.module#EWeeklyPageModule' ,
    canActivate: [AuthGuard]
  },
  { 
    path: 'e-monthly',
    loadChildren: './e-monthly/e-monthly.module#EMonthlyPageModule' ,
    canActivate: [AuthGuard]
  },
  { 
    path: 'electricity',
    loadChildren: './electricity/electricity.module#ElectricityPageModule'
  },
  { 
    path: 'login',
    loadChildren: './login/login.module#LoginPageModule'
  },
  { 
    path: 'signup',
    loadChildren: './signup/signup.module#SignupPageModule'
  },
 
{ 
  path: 'chart3d',
  loadChildren: './chart3d/chart3d.module#Chart3dPageModule',
  canActivate: [AuthGuard]

}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

