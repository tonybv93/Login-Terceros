import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmergencyReservationComponent } from '../views/pages/emergency-reservation/emergency-reservation.component';
import { UsersQrComponent } from '../views/pages/users-qr/users-qr.component';
import { PublicComponent } from './validate-qr/public.component';

const routes: Routes = [
  {path:'', component:PublicComponent,
  children:[
    {path:'qr', component: UsersQrComponent},
    {path:'emergencia', component: EmergencyReservationComponent},
    {path:'**', redirectTo:'qr'}
  ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
