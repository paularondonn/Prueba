import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Ruta hija
const routes: Routes = [
  { path:'', loadChildren: () => import('./components/index/index.module').then(m=>m.IndexModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
