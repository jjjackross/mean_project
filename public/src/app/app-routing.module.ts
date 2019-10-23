import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/start' },
  { path: 'start', component: StartComponent },
  { path: 'week01', component: Week01Component },
  { path: 'week02', component: Week02Component },
  { path: 'week03', component: Week03Component },
  { path: 'week04', component: Week04Component },
  { path: 'week05', component: Week05Component },
  { path: 'week06', component: Week06Component },
  { path: 'week07', component: Week07Component },
  { path: 'week08', component: Week08Component },
  { path: 'week09', component: Week09Component },
  { path: 'week10', component: Week10Component },
  { path: 'week11', component: Week11Component },
  { path: 'week12', component: Week12Component },
  { path: 'week13', component: Week13Component },
  { path: 'week14', component: Week14Component },
  { path: 'gameover', component: GameoverComponent },
  { path: 'congratulations', component: CongratulationsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
