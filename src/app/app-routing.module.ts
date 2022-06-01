import { ConversorComponent } from './components/conversor/conversor.component';
import { HomeComponent } from './components/home/home.component';

import { MainComponent } from './components/main/main.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToroComponent } from './components/toro/toro.component';

const routes: Routes = [{path: '', component:MainComponent, children:[
  {path: 'Home', component:HomeComponent},
  {path: 'Calendar', component:ToroComponent},
  {path: 'Edit', component:ToroComponent},
  {path: 'Settings', component:ToroComponent},
  {path: 'Documentation', component:ToroComponent},
  {path: 'Conversor', component:ConversorComponent}
] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
