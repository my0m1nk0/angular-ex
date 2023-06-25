import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './component_ex/event/event.component';
import { HomeComponent } from './component_ex/home/home.component';
import { DatabindingComponent } from './component_ex/databinding/databinding.component';
import { TransformationsComponent } from './pipe/transformations/transformations.component';

const routes: Routes = [
  {
    path:'event',component:EventComponent
  },
  {
    path:'bind',component:DatabindingComponent
  },
  {
    path:'',component:TransformationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
