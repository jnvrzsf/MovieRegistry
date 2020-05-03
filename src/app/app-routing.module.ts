import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component'
import { DashboardComponent }   from './dashboard/dashboard.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component'
import { MovieEditComponent } from './movie-edit/movie-edit.component'
import { NewMovieComponent } from './new-movie/new-movie.component'

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/new', component: NewMovieComponent},
  { path: 'movies/:id', component: MovieDetailComponent },
  { path: 'movies/:id/edit', component: MovieEditComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
