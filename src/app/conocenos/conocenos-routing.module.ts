import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutGuard } from '../commons/guards/out.guard';
import { ConocenosComponent } from './conocenos.component';

const routes: Routes = [

  {
    path: '',
    component: ConocenosComponent,  
    canDeactivate: [OutGuard],
   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConocenosRoutingModule { }
