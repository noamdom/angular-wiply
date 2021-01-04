import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { ColorsGridComponent } from './components/colors-grid/colors-grid.component';

import {ColorsService} from './services/colors.service'


@NgModule({
  declarations: [
    AppComponent,
    ColorsGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [ColorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
