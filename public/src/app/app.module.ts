import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/Http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { StartComponent } from './start/start.component';
import { Week01Component } from './week01/week01.component';
import { Week02Component } from './week02/week02.component';
import { Week03Component } from './week03/week03.component';
import { Week04Component } from './week04/week04.component';
import { Week05Component } from './week05/week05.component';
import { Week06Component } from './week06/week06.component';
import { Week07Component } from './week07/week07.component';
import { Week08Component } from './week08/week08.component';
import { Week09Component } from './week09/week09.component';
import { Week10Component } from './week10/week10.component';
import { Week11Component } from './week11/week11.component';
import { Week12Component } from './week12/week12.component';
import { Week13Component } from './week13/week13.component';
import { Week14Component } from './week14/week14.component';
import { GameoverComponent } from './gameover/gameover.component';
import { CongratulationsComponent } from './congratulations/congratulations.component';





@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    Week01Component,
    Week02Component,
    Week03Component,
    Week04Component,
    Week05Component,
    Week06Component,
    Week07Component,
    Week08Component,
    Week09Component,
    Week10Component,
    Week11Component,
    Week12Component,
    Week13Component,
    Week14Component,
    GameoverComponent,
    CongratulationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
