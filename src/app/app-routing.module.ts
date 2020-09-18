import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DistGraphComponent } from './dist-graph/dist-graph.component';
import { StateGraphComponent } from './state-graph/state-graph.component';

const routes: Routes = [
  { path : 'dist-graph', component : DistGraphComponent},
  { path : 'state-graph', component : StateGraphComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
