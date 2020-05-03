import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieStoreService } from '../movie-store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'reg-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  movies: Observable<Movie[]>;

  constructor(private movieStoreService: MovieStoreService) { }

  ngOnInit(): void {
    this.movies = this.movieStoreService.movies;
  }
}
