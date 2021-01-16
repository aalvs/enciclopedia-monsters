import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LideresComponent } from './components/lideres/lideres.component';
import { MedalhasComponent } from './components/medalhas/medalhas.component';
import { MonstrosComponent } from './components/monstros/monstros.component';

const routes: Routes = [

  { path: 'monstros', component: MonstrosComponent },
  { path: 'lideres', component: LideresComponent },
  { path: 'medalhas', component: MedalhasComponent },
  { path: '', redirectTo: '/monstros', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
