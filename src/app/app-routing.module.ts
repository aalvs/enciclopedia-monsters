import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LideresComponent } from './components/lideres/lideres.component';
import { MedalhasComponent } from './components/medalhas/medalhas.component';
import { MonstrosComponent } from './components/monstros/monstros.component';

const routes: Routes = [

  { path: 'monstros', component: MonstrosComponent, data: { title: 'Monstros' } },
  { path: 'lideres', component: LideresComponent, data: { title: 'Lideres' } },
  { path: 'medalhas', component: MedalhasComponent, data: { title: 'Medalhas' } },
  { path: '', redirectTo: '/monstros', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
