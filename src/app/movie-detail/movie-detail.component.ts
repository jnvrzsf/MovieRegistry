import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MovieService } from '../movie.service'
import { MovieStoreService} from '../movie-store.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';

@Component({
  selector: 'reg-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  @Input()
  movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private movieService: MovieService,
    private movieStoreService: MovieStoreService,
    private modalService: NgbModal
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

  openDeleteModal(): void {
    let modal = this.modalService.open(DeleteModalComponent, { centered: true });
    modal.result.then(
      (result)=>{
      if (result) {
        this.movieStoreService.deleteMovie(this.movie);
        this.location.back();
      }
    });
  }
}
