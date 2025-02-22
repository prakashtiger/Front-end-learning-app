import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
   // Your route here:
   {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },

   {
    path: 'flights',
    loadChildren: () => import('mfe1/Module').then(m => m.FlightsModule)
  },
  
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
