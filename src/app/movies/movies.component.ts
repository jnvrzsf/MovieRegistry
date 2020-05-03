import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieStoreService } from '../movie-store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'reg-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  selectedMovie: Movie;
  movies: Observable<Movie[]>;

  constructor(private movieStoreService: MovieStoreService) { }

  ngOnInit(): void {
    this.movies = this.movieStoreService.movies;
  }
}
