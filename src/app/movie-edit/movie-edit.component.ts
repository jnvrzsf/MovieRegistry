import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MovieService } from '../movie.service'
import { MovieStoreService} from '../movie-store.service';

@Component({
  selector: 'reg-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss']
})
export class MovieEditComponent implements OnInit {

  @Input()
  movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private movieStoreService: MovieStoreService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id)
    .subscribe(movie => this.movie = movie);
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(): void {
    this.movieStoreService.updateMovie(this.movie);
    this.goBack();
  }
}
