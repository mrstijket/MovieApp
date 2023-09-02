import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { AddMovieComponent } from './add-movie/add-movie.component';

const routes: Routes = [
  { path: '', redirectTo:'/dashboard', pathMatch:'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'movies', component: MoviesComponent},
  { path: 'detail/:id', component: MovieDetailComponent},
  { path: 'add', component: AddMovieComponent}
]

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
