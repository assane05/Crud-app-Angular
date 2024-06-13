import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  { path: '', title: 'home page', component: HomeComponent },
  { path: '', component: NavbarComponent },
  { path: '**', title: 'not found page', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
