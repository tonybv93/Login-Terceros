import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { UsersQrComponent } from './users-qr/users-qr.component';
import { MatIconModule } from '@angular/material/icon';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmergencyReservationComponent } from './emergency-reservation/emergency-reservation.component';
import { ModalTriajeComponent } from './emergency-reservation/modal-triaje/modal-triaje.component';
import { QRCodeModule } from 'angular2-qrcode';

@NgModule({
  declarations: [
    UsersQrComponent,
    EmergencyReservationComponent,
    ModalTriajeComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    NgQrScannerModule,
    QRCodeModule
  ],
  exports:[
    UsersQrComponent
  ]
})
export class PagesModule { }
