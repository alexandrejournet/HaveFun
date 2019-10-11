import { MapComponent } from './components/map/map.component';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: MapComponent},
  {path: 'account', component: AccountInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
