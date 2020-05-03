import { Component, OnInit, Input, Output } from '@angular/core';
import { Movie } from '../movie';
import { Location } from '@angular/common';
import { MovieStoreService } from '../movie-store.service';

@Component({
  selector: 'reg-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.scss']
})
export class NewMovieComponent implements OnInit {
  
  movie: Movie = {
    id: undefined,
    picture: undefined,
    title: undefined,
    year: undefined,
    director: undefined,
    genre: undefined,
    description: undefined,
  };

  constructor(
    private location: Location,
    private movieStoreService: MovieStoreService
    ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.movieStoreService.addMovie(this.movie);
    this.location.back()
    //this.router.navigate(['items'], { relativeTo: this.route });
  }
}
