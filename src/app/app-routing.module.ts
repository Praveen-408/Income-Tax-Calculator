import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ITCalculationComponent } from './itcalculation/itcalculation.component';

const routes: Routes = [
  
  { path: 'IncomeTaxCalculation', component: ITCalculationComponent },
  { path: '', redirectTo: '/IncomeTaxCalculation' , pathMatch : 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
