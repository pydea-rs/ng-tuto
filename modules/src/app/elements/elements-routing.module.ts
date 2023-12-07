import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // eager routing needs the definite path (like below:)
  // {path: 'elements', component: ElementsHomeComponent}
  // lazy routing needs to relative paths (like below:)
  {path: '', component: ElementsHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
