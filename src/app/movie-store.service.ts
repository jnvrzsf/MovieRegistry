import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from 'src/app/movie';
import { MovieService } from 'src/app/movie.service';

@Injectable({
  providedIn: 'root'
})
export class MovieStoreService {
  private _movies: BehaviorSubject<Movie[]> = new BehaviorSubject([]);

  public readonly movies: Observable<Movie[]> = this._movies.asObservable();

  constructor(private movieService: MovieService) {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe(
      res => {
        let movies = res; 
        this._movies.next(movies);
      },
      err => console.log("Error retrieving Movies")
    );
  }

  public addMovie(newMovie: Movie): void {
    this.movieService.addMovie(newMovie).subscribe(
      res => {
        let newMovies: Movie[] = this._movies.getValue().slice(); //this._movies.next(this._movies.getValue().concat([res])); ?
        newMovies.push(res);
        this._movies.next(newMovies);
      });
  }

  public deleteMovie(movie: Movie): void {
    this.movieService.deleteMovie(movie).subscribe(
      res => {
        let newMovies: Movie[] = this._movies.getValue().slice();
        this._movies.next(newMovies.filter(m => m.id != movie.id));
      }
    )
  }

  public updateMovie(movie: Movie): void {
    this.movieService.updateMovie(movie).subscribe(
      res => {
        let newMovies: Movie[] = this._movies.getValue().slice();
        for (let i in newMovies) {
          if (newMovies[i].id == movie.id) {
            newMovies[i] = movie;
            break;
          }
        }
        this._movies.next(newMovies);
      }
    );
  }
}
