import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeComponent } from './anime/anime.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: 'anime', component: AnimeComponent},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: '/anime', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
